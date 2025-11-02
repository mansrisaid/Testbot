<?php
$token = "ضع_رمز_API_هنا";
$data = file_get_contents("php://input");
$update = json_decode($data, true);

if (!isset($update["message"])) exit;

$chat_id = $update["message"]["chat"]["id"];
$text = $update["message"]["text"] ?? '';

$reply = "لقد أرسلت: $text";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($reply));
?>