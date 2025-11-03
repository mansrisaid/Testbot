<?php
$token = "8582221864:AAEGkl0LSk3EQ6aYHhALJQSBfOd6gU0DM9Q";
$data = file_get_contents("php://input");
$update = json_decode($data, true);

if (!isset($update["message"])) exit;

$chat_id = $update["message"]["chat"]["id"];
$text = $update["message"]["text"] ?? '';

$reply = "لقد أرسلت: $text";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($reply));
?>
