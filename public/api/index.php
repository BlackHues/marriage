<?php
/**
 * ============================================================================
 * Royal Wedding of Abhirami & Ajeesh - Digital Guestbook API
 * ============================================================================
 * Handles guest wishes, congratulations, likes, and celebration stats.
 * Compatible with Hostinger Shared Hosting (PHP 7.4 to 8.3+).
 * 
 * ZERO CONFIGURATION DEFAULT:
 * Automatically uses SQLite (wedding_wishes.sqlite) in the current directory.
 * No database setup or phpMyAdmin needed!
 * 
 * HOSTINGER MYSQL OPTION:
 * If you prefer using Hostinger's MySQL database:
 * 1. Set $USE_MYSQL = true below
 * 2. Fill in your Hostinger MySQL details from hPanel -> Databases
 * 3. The table and initial wishes will be created automatically on first visit!
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. CONFIGURATION
// ----------------------------------------------------------------------------
$USE_MYSQL = false; // Set to true if you want to use Hostinger MySQL instead of SQLite

// Fill these only if $USE_MYSQL is true:
$DB_HOST = 'localhost';
$DB_NAME = 'u123456789_wedding';
$DB_USER = 'u123456789_user';
$DB_PASS = 'YourHostingerPasswordHere';
$DB_PORT = '3306';

// ----------------------------------------------------------------------------
// 2. CORS & HEADERS
// ----------------------------------------------------------------------------
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// ----------------------------------------------------------------------------
// 3. DATABASE INITIALIZATION
// ----------------------------------------------------------------------------
function getDatabaseConnection() {
    global $USE_MYSQL, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS, $DB_PORT;

    try {
        if ($USE_MYSQL) {
            $dsn = "mysql:host={$DB_HOST};port={$DB_PORT};dbname={$DB_NAME};charset=utf8mb4";
            $pdo = new PDO($dsn, $DB_USER, $DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);

            // Create MySQL table if not exists
            $pdo->exec("
                CREATE TABLE IF NOT EXISTS wishes (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(150) NOT NULL,
                    relation VARCHAR(100) NOT NULL DEFAULT 'Well-wisher',
                    message TEXT NOT NULL,
                    emoji VARCHAR(20) NOT NULL DEFAULT '💖',
                    likes INT NOT NULL DEFAULT 0,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
            ");
        } else {
            // Default: Zero-config SQLite database
            $dbPath = __DIR__ . '/wedding_wishes.sqlite';
            $pdo = new PDO('sqlite:' . $dbPath);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

            // Create SQLite table if not exists
            $pdo->exec("
                CREATE TABLE IF NOT EXISTS wishes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    relation TEXT NOT NULL DEFAULT 'Well-wisher',
                    message TEXT NOT NULL,
                    emoji TEXT NOT NULL DEFAULT '💖',
                    likes INTEGER NOT NULL DEFAULT 0,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
                CREATE INDEX IF NOT EXISTS idx_wishes_created ON wishes(created_at DESC);
            ");
        }

        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => 'Database connection failed: ' . $e->getMessage()
        ]);
        exit;
    }
}

// ----------------------------------------------------------------------------
// 4. ROUTE DISPATCHER
// ----------------------------------------------------------------------------
$method = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($requestUri, PHP_URL_PATH);

// Normalize path relative to /api
// e.g. /api/wishes -> /wishes, /wedding/api/wishes -> /wishes
if (preg_match('#/api(?:/index\.php)?(/.*)?$#i', $path, $matches)) {
    $endpoint = $matches[1] ?? '/';
} else {
    $endpoint = $path;
}
$endpoint = rtrim($endpoint, '/');
if ($endpoint === '') {
    $endpoint = '/';
}

// Support query parameter override (?endpoint=/wishes)
if (isset($_GET['endpoint'])) {
    $endpoint = '/' . ltrim($_GET['endpoint'], '/');
}

$pdo = getDatabaseConnection();

// ROUTE 1: GET /api/wishes
if ($method === 'GET' && ($endpoint === '/wishes' || $endpoint === '/')) {
    try {
        $stmt = $pdo->query("SELECT * FROM wishes ORDER BY id DESC");
        $wishes = $stmt->fetchAll();
        echo json_encode([
            'success' => true,
            'data' => $wishes
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ROUTE 2: POST /api/wishes
if ($method === 'POST' && ($endpoint === '/wishes' || $endpoint === '')) {
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);

    if (!$data) {
        $data = $_POST;
    }

    $name = trim($data['name'] ?? '');
    $relation = trim($data['relation'] ?? 'Well-wisher');
    $message = trim($data['message'] ?? '');
    $emoji = trim($data['emoji'] ?? '💖');

    if (empty($name) || empty($message)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Name and message are required.'
        ]);
        exit;
    }

    // Sanitize string lengths
    $name = mb_substr($name, 0, 100);
    $relation = mb_substr($relation, 0, 50);
    $message = mb_substr($message, 0, 1000);
    $emoji = mb_substr($emoji, 0, 10);

    try {
        $stmt = $pdo->prepare("
            INSERT INTO wishes (name, relation, message, emoji, likes)
            VALUES (:name, :relation, :message, :emoji, 0)
        ");
        $stmt->execute([
            ':name' => $name,
            ':relation' => $relation,
            ':message' => $message,
            ':emoji' => $emoji
        ]);

        $newId = $pdo->lastInsertId();
        $fetchStmt = $pdo->prepare("SELECT * FROM wishes WHERE id = :id");
        $fetchStmt->execute([':id' => $newId]);
        $newWish = $fetchStmt->fetch();

        http_response_code(201);
        echo json_encode([
            'success' => true,
            'data' => $newWish
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ROUTE 3: POST /api/wishes/{id}/like
if ($method === 'POST' && preg_match('#^/wishes/(\d+)/like$#', $endpoint, $matches)) {
    $id = (int)$matches[1];
    $data = json_decode(file_get_contents('php://input'), true) ?? [];
    $userToken = trim($data['userToken'] ?? '') ?: ($_SERVER['REMOTE_ADDR'] ?? 'anonymous');

    try {
        // Create wish_likes table if not exists
        $pdo->exec("CREATE TABLE IF NOT EXISTS wish_likes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            wish_id INTEGER NOT NULL,
            user_token TEXT NOT NULL,
            ip TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(wish_id, user_token)
        )");

        // Check if user already liked
        $checkStmt = $pdo->prepare("SELECT id FROM wish_likes WHERE wish_id = :id AND user_token = :token");
        $checkStmt->execute([':id' => $id, ':token' => $userToken]);
        if ($checkStmt->fetch()) {
            $fetchStmt = $pdo->prepare("SELECT likes FROM wishes WHERE id = :id");
            $fetchStmt->execute([':id' => $id]);
            echo json_encode([
                'success' => false,
                'alreadyLiked' => true,
                'likes' => (int)$fetchStmt->fetchColumn()
            ]);
            exit;
        }

        // Record like
        $insertStmt = $pdo->prepare("INSERT INTO wish_likes (wish_id, user_token, ip) VALUES (:id, :token, :ip)");
        $insertStmt->execute([':id' => $id, ':token' => $userToken, ':ip' => $_SERVER['REMOTE_ADDR'] ?? '']);

        $updateStmt = $pdo->prepare("UPDATE wishes SET likes = likes + 1 WHERE id = :id");
        $updateStmt->execute([':id' => $id]);

        $fetchStmt = $pdo->prepare("SELECT likes FROM wishes WHERE id = :id");
        $fetchStmt->execute([':id' => $id]);
        $likes = (int)$fetchStmt->fetchColumn();

        echo json_encode([
            'success' => true,
            'alreadyLiked' => false,
            'likes' => $likes
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ROUTE 4: GET /api/stats
if ($method === 'GET' && $endpoint === '/stats') {
    try {
        $stmt = $pdo->query("SELECT COUNT(*) as totalWishes, COALESCE(SUM(likes), 0) as totalLikes FROM wishes");
        $stats = $stmt->fetch();

        echo json_encode([
            'success' => true,
            'data' => [
                'totalWishes' => (int)($stats['totalWishes'] ?? 0),
                'totalLikes' => (int)($stats['totalLikes'] ?? 0),
                'weddingDate' => '2027-01-24T10:05:00+05:30',
                'couple' => 'Abhirami S L & Ajeesh R',
                'venue' => 'Sivagiri Sarada Mutt, Varkala'
            ]
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ROUTE 5: Health Check / Ping
if ($endpoint === '/ping' || $endpoint === '/test') {
    global $USE_MYSQL;
    echo json_encode([
        'success' => true,
        'message' => 'Abhirami & Ajeesh Wedding API is fully operational!',
        'database' => $USE_MYSQL ? 'Hostinger MySQL' : 'SQLite (zero setup)',
        'timestamp' => date('c')
    ]);
    exit;
}

// Fallback: 404
http_response_code(404);
echo json_encode([
    'success' => false,
    'error' => 'Endpoint not found',
    'endpoint' => $endpoint,
    'method' => $method
]);
