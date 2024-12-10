<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: http://51.83.79.10');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require __DIR__ . '/vendor/autoload.php'; 

$data = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['message' => 'Invalid JSON input']);
    http_response_code(400);
    exit();
}

if (isset($data['nom'], $data['prenom'], $data['email'], $data['message'])) {
    $nom = $data['nom'];
    $prenom = $data['prenom'];
    $email = $data['email'];
    $message = $data['message'];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kilani.asseila@gmail.com';
        $mail->Password = 'rjhyapajgigvljor'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $nom . ' ' . $prenom);
        $mail->addAddress('kilani.asseila@gmail.com'); 

        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message de ' . $nom . ' ' . $prenom . ' ' . $email;
        $mail->Body    = $message;

        $mail->send();
        echo json_encode(['message' => 'Email sent successfully']);
    } catch (Exception $e) {
        echo json_encode(['message' => 'Email could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
        http_response_code(500);
    }
} else {
    echo json_encode(['message' => 'Invalid input']);
    http_response_code(400);
}
?>