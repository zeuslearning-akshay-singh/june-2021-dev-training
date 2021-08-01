<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

//Set a connection 
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=quantam', 'root', '12345678');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Getting data
$data = json_decode(file_get_contents("php://input"));

$walk_in = htmlspecialchars(strip_tags($data->walk_in));
$user_id = htmlspecialchars(strip_tags($data->user_id));
$time_slot = htmlspecialchars(strip_tags($data->time_slot));
$user_resume = htmlspecialchars(strip_tags($data->user_resume));
$walk_in_job_role = htmlspecialchars(strip_tags($data->walk_in_job_role));

if (empty($walk_in) || empty($user_id) || empty($time_slot) || empty($user_resume) || empty($walk_in_job_role)) {
    echo json_encode(
        array('message' => 'Every form field is compulsory')
    );
} else {
    echo json_encode(
        array('message' => 'Perfect')
    );
}

// $stmt = $pdo->prepare('CALL InsertUserData(:walk_in,:user_id,:time_slot,:user_resume,:walk_in_job_role)');


// $stmt->bindParam(':walk_in', $walk_in);
// $stmt->bindParam(':user_id', $user_id);
// $stmt->bindParam(':time_slot', $time_slot);
// $stmt->bindParam(':user_resume', $user_resume);
// $stmt->bindParam(':walk_in_job_role', $walk_in_job_role);

// $stmt->execute();
