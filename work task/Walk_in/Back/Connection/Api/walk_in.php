<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// DB Connection
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=quantam', 'root', '12345678');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);




// Date formating::
$date = '2021-07-01';
$date = strtotime($date);
$date = date('Y-m-d', $date);

// Call Walk-In

$stmt = $pdo->prepare("CALL GetWalkIn('$date')");
$stmt->execute();

// Logic
$i = 0;
$Walk = [
    'data' => array(),
    'location' => array(),
    'destination' => array()
];

// Function for Pushing the Associated array
function array_push_assoc($array, $key, $value)
{
    $array[$key] = $value;
    return $array;
}


do {
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($rows) {
        // print_r($rows);
        if ($i === 0) {
            $Walk = array_push_assoc($Walk, 'data', $rows);
        }
        if ($i === 1) {
            $Walk = array_push_assoc($Walk, 'location', $rows);
        }
        if ($i === 2) {
            $Walk = array_push_assoc($Walk, 'destination', $rows);
        }
        $i++;
    }
} while ($stmt->nextRowset());

if ($Walk) {
    // Dumping the trial
    echo json_encode($Walk);
} else {
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}
