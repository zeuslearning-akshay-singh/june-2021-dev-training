<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

//Set a connection 
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=quantam', 'root', '12345678');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Getting data from json format
$data = json_decode(file_get_contents("php://input"));

// Cleaning & seprating the data
$username = htmlspecialchars(strip_tags($data->username));
$password = htmlspecialchars(strip_tags($data->password));



if (empty($username) || empty($password)) {
    echo json_encode(
        array('message' => 'Username or Password is invalid')
    );
} else {

    $stmt = $pdo->prepare("select user_id from user where email_id = :email AND password = :password");

    $stmt->bindParam(':email', $username);
    $stmt->bindParam(':password', $password);

    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);


    if (empty($rows)) {
        echo json_encode(
            array('message' => 'Username or Password is invalid')
        );
    } else {
        echo json_encode($rows);
    }
}
