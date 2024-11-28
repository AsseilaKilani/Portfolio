<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: http://localhost:3003');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight request
    http_response_code(200);
    exit();
}

require '../vendor/autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['nom'], $data['prenom'], $data['email'], $data['message'])) {
    $nom = $data['nom'];
    $prenom = $data['prenom'];
    $email = $data['email'];
    $message = $data['message'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kilani.asseila@gmail.com'; // Replace with your email address
        $mail->Password = 'rjhyapajgigvljor'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        //Recipients
        $mail->setFrom($email, "$nom $prenom");
        $mail->addAddress('kilani.asseila@gmail.com'); // Add a recipient

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'New message from your website';
        $mail->Body    = "Name: $nom\nFirst Name: $prenom\nEmail: $email\nMessage: $message";

        $mail->send();
        echo json_encode(['message' => 'Email sent successfully']);
    } catch (Exception $e) {
        echo json_encode(['message' => 'Email could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['message' => 'Invalid input']);
}
?>