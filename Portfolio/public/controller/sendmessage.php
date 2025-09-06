<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../../vendor/autoload.php';

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

// Function to send email
function sendEmail($senderName, $senderEmail, $senderMsg, $mail) {
    // Set SMTP settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@projectworld.online';
    $mail->Password = 'Admin#1234';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Set sender and recipient
    $mail->setFrom('admin@projectworld.online', 'ProjectWorld');
    $mail->addAddress("khensabeniano10@gmail.com", '');

    // Set email content
    $mail->isHTML(true);
    $mail->Subject = 'New Email Received';
    $mail->Body = "$senderName sent you an email saying: $senderMsg. To reply to the sender, click this $senderEmail";

    // Try sending the email
    try {
        $mail->send();
        return 'Message Sent';
    } catch (Exception $e) {
        return 'Error sending email: ' . $mail->ErrorInfo;
    }
}

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve data from GET parameters

    $senderName = $_GET['name'];
    $senderEmail = $_GET['email'];
    $senderMsg = $_GET['message'];

    // Send the email
    $result = sendEmail($senderName, $senderEmail, $senderMsg, $mail);
    
    // Return the result
    echo json_encode(['status' => 200, "message" => $result]);
    exit();
}
?>
