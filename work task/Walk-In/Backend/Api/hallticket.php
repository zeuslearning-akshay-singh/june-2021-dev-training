<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

// DB Connection
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=quantam', 'root', '12345678');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//  
$userid = 1;

$hallticket;
$hallticket_stmt = $pdo->prepare("CALL GetHallTicket($userid)");
$hallticket_stmt->execute();

do {
    $rows = $hallticket_stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        $hallticket = $rows;
    }
} while ($hallticket_stmt->nextRowset());


// echo '<pre>';
// var_dump($hallticket);
// // echo '</pre>';
// echo '<pre>';
echo json_encode($hallticket);
// echo '</pre>';
