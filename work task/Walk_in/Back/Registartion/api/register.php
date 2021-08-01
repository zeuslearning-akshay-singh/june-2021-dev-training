<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

// DB Connection
$pdo = new PDO('mysql:host=localhost;port=3306;dbname=walk_in', 'root', '12345678');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


// Getting data
$data = json_decode(file_get_contents("php://input"));

// extracting the data from json for main table
$first_name = htmlspecialchars(strip_tags($data->first_name));
$last_name = htmlspecialchars(strip_tags($data->last_name));
$email_id = htmlspecialchars(strip_tags($data->email_id));
$password = htmlspecialchars(strip_tags($data->password));
$phone_number = htmlspecialchars(strip_tags($data->phone_number));
$resume_link = htmlspecialchars(strip_tags($data->resume_link));
$protfolio_url = htmlspecialchars(strip_tags($data->protfolio_url));
$job_role = htmlspecialchars(strip_tags($data->jobPrefrences));
$referral_employee = htmlspecialchars(strip_tags($data->referral_employee));
$update_regarding_job = htmlspecialchars(strip_tags($data->update_regarding_job));
$aggreagate_percentage = htmlspecialchars(strip_tags($data->aggreagate_percentage));
$year_of_passing = htmlspecialchars(strip_tags($data->year_of_passing));
$qualification = htmlspecialchars(strip_tags($data->qualification));
$stream = htmlspecialchars(strip_tags($data->stream));
$college = htmlspecialchars(strip_tags($data->college));
$other_college = htmlspecialchars(strip_tags($data->other_college));
$college_location = htmlspecialchars(strip_tags($data->college_location));
$applicant_type = htmlspecialchars(strip_tags($data->applicant_type));

// extracting the data from json for Fresher | Experienced table
$experience_years = htmlspecialchars(strip_tags($data->experience_years));
$current_ctc = htmlspecialchars(strip_tags($data->current_ctc));
$expected_ctc = htmlspecialchars(strip_tags($data->expected_ctc));
$expertise_technology = htmlspecialchars(strip_tags($data->expertise_technology));
$other_expertise_technology = htmlspecialchars(strip_tags($data->other_expertise_technology));
$familiar_technology = htmlspecialchars(strip_tags($data->familiar_technology));
$other_familiar_technology = htmlspecialchars(strip_tags($data->other_familiar_technology));
$on_notice_period = htmlspecialchars(strip_tags($data->on_notice_period));
$notice_period_end = htmlspecialchars(strip_tags($data->notice_period_end));
$long_notice_period = htmlspecialchars(strip_tags($data->long_notice_period));
$appeared_before = htmlspecialchars(strip_tags($data->appeared_before));
$role_applied_before = htmlspecialchars(strip_tags($data->role_applied_before));

// Calling Stored Procedure
$stmt = $pdo->prepare(
    "CALL InsertData(
    :first_name, 
    :last_name, 
    :email_id, 
    :password, 
    :phone_number, 
    :resume_link,
    :protfolio_url, 
    :job_role, 
    :referral_employee,
    :update_regarding_job, 
    :aggreagate_percentage, 
    :year_of_passing, 
    :qualification, 
    :stream, 
    :college, 
    :other_college,
    :college_location, 
    :applicant_type,
    :experience_years, 
    :current_ctc, 
    :expected_ctc, 
    :expertise_technology, 
    :other_expertise_technology, 
    :familiar_technology,
    :other_familiar_technology, 
    :on_notice_period, 
    :notice_period_end, 
    :long_notice_period, 
    :appeared_before, 
    :role_applied_before)"
);

// Binding Parameters for Main table
$stmt->bindParam(':first_name', $first_name);
$stmt->bindParam(':last_name', $last_name);
$stmt->bindParam(':email_id', $email_id);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':phone_number', $phone_number);
$stmt->bindParam(':resume_link', $resume_link);
$stmt->bindParam(':protfolio_url', $protfolio_url);
$stmt->bindParam(':job_role', $job_role);
$stmt->bindParam(':referral_employee', $referral_employee);
$stmt->bindParam(':update_regarding_job', $update_regarding_job);
$stmt->bindParam(':aggreagate_percentage', $aggreagate_percentage);
$stmt->bindParam(':year_of_passing', $year_of_passing);
$stmt->bindParam(':qualification', $qualification);
$stmt->bindParam(':stream', $stream);
$stmt->bindParam(':college', $college);
$stmt->bindParam(':other_college', $other_college);
$stmt->bindParam(':college_location', $college_location);
$stmt->bindParam(':applicant_type', $applicant_type);

// Binding Parameters for Fresher | Experienced table
$stmt->bindParam(':experience_years', $experience_years);
$stmt->bindParam(':current_ctc', $current_ctc);
$stmt->bindParam(':expected_ctc', $expected_ctc);
$stmt->bindParam(':expertise_technology', $expertise_technology);
$stmt->bindParam(':other_expertise_technology', $other_expertise_technology);
$stmt->bindParam(':familiar_technology', $familiar_technology);
$stmt->bindParam(':other_familiar_technology', $other_familiar_technology);
$stmt->bindParam(':on_notice_period', $on_notice_period);
$stmt->bindParam(':notice_period_end', $notice_period_end);
$stmt->bindParam(':long_notice_period', $long_notice_period);
$stmt->bindParam(':appeared_before', $appeared_before);
$stmt->bindParam(':role_applied_before', $role_applied_before);

// Executing the Qwery
$executed = $stmt->execute();

// Checking whether Qwery is Executed or not
if ($executed) {
    echo json_encode(
        array('message' => "Perfect")
    );
} else {
    echo json_encode(
        array('message' => 'Every form field is compulsory')
    );
}
