<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

// DB Connection
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=quantam', 'root', '12345678');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Date formating::
$walk_in= 1;

// Call Walk-In

$walk_in_stmt = $pdo->prepare("CALL GetWalkInDetails($walk_in)");
$walk_in_stmt->execute();

// Logic
$i = 0;
$walk_in_detail = array(
    'info' => array(),
    'location' => array(),
    'destination' => array(),
    'instruction' => array(),
    'timeslot' => array(),
    'preferences' => array(),
    'job' => array()
);

// Function for Pushing the Associated array
function array_push_assoc($array, $key, $value)
{
    $array[$key] = $value;
    return $array;
}

do {
    $rows = $walk_in_stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        // print_r($rows);
        if ($i === 0) {
            $walk_in_detail = array_push_assoc($walk_in_detail, 'info', $rows);
        }
        if ($i === 1) {
            $walk_in_detail = array_push_assoc($walk_in_detail, 'location', $rows);
        }
        if ($i === 2) {
            $walk_in_detail = array_push_assoc($walk_in_detail, 'destination', $rows);
        }
        $i++;
    }
} while ($walk_in_stmt->nextRowset());


// GetInstruction

$instruction_stmt = $pdo->prepare("CALL GetInstruction($walk_in)");
$instruction_stmt->execute();

do {
    $rows = $instruction_stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        $walk_in_detail = array_push_assoc($walk_in_detail, 'instruction', $rows);
    }
} while ($instruction_stmt->nextRowset());


// GetTimeslot

$time_slot_stmt = $pdo->prepare("CALL GetTimeslot($walk_in)");
$time_slot_stmt->execute();

do {
    $rows = $time_slot_stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        $walk_in_detail = array_push_assoc($walk_in_detail, 'timeslot', $rows);
    }
} while ($time_slot_stmt->nextRowset());


// GetPreferences

$preferences_stmt = $pdo->prepare("CALL GetPreferences($walk_in)");
$preferences_stmt->execute();

do {
    $rows = $preferences_stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        $walk_in_detail = array_push_assoc($walk_in_detail, 'preferences', $rows);
    }
} while ($preferences_stmt->nextRowset());

// GetJobProfile

$job_profile_stmt = $pdo->prepare("CALL GetJobProfile($walk_in)");
$job_profile_stmt->execute();

do {
    $rows = $job_profile_stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        $walk_in_detail = array_push_assoc($walk_in_detail, 'job', $rows);
    }
} while ($job_profile_stmt->nextRowset());

echo json_encode($walk_in_detail);
