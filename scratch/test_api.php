<?php
// Test 1: GET stats
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['REQUEST_URI'] = '/api/stats';
ob_start();
include __DIR__ . '/../public/api/index.php';
$output = ob_get_clean();
echo "STATS:\n" . $output . "\n\n";

// Test 2: Like wish 1
$_SERVER['REQUEST_METHOD'] = 'POST';
$_SERVER['REQUEST_URI'] = '/api/wishes/1/like';
ob_start();
include __DIR__ . '/../public/api/index.php';
$output = ob_get_clean();
echo "LIKE WISH 1:\n" . $output . "\n";
