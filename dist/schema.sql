-- ============================================================================
-- Royal Wedding of Abhirami & Ajeesh - Database Table Schema (MySQL)
-- ============================================================================
-- NOTE: If you are using Hostinger MySQL, you can either:
-- 1. Just put your credentials in api/index.php (it creates this table automatically!)
-- OR
-- 2. Open phpMyAdmin in Hostinger hPanel -> SQL tab and paste this script:

CREATE TABLE IF NOT EXISTS wishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    relation VARCHAR(100) NOT NULL DEFAULT 'Well-wisher',
    message TEXT NOT NULL,
    emoji VARCHAR(20) NOT NULL DEFAULT '💖',
    likes INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
