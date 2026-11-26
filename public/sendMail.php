<?php
header('Content-Type: application/json; charset=utf-8');

const RECIPIENT_ADDRESS = 'kontakt@onur-onanmis.de';
const SENDER_ADDRESS = 'kontakt@onur-onanmis.de';

function sendResponse(int $statusCode, bool $isSuccess): void
{
    http_response_code($statusCode);
    echo json_encode(['success' => $isSuccess]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(405, false);
}

$requestData = json_decode(file_get_contents('php://input'), true);
if (!is_array($requestData)) {
    sendResponse(400, false);
}

if (!empty($requestData['website'])) {
    sendResponse(200, true);
}

$senderName = str_replace(["\r", "\n"], '', trim(strip_tags($requestData['name'] ?? '')));
$senderEmail = trim($requestData['email'] ?? '');
$messageText = trim(strip_tags($requestData['message'] ?? ''));

if ($senderName === '' || !filter_var($senderEmail, FILTER_VALIDATE_EMAIL) || mb_strlen($messageText) < 10) {
    sendResponse(422, false);
}

$mailSubject = '=?UTF-8?B?' . base64_encode('Portfolio-Kontakt von ' . $senderName) . '?=';
$mailBody = "Name: $senderName\nE-Mail: $senderEmail\n\n$messageText";
$mailHeaders = [
    'From' => 'Portfolio <' . SENDER_ADDRESS . '>',
    'Reply-To' => $senderEmail,
    'Content-Type' => 'text/plain; charset=UTF-8',
];

$isSent = mail(RECIPIENT_ADDRESS, $mailSubject, $mailBody, $mailHeaders, '-f' . SENDER_ADDRESS);
sendResponse($isSent ? 200 : 500, $isSent);
