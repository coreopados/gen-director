<?php

//$mail_to = $_POST['send_to'];
$mail_to = 'rating.info@gd.ru';


if($name = trim(htmlspecialchars($_POST['name']))){
$message .= 
'
Имя: '.$name;}

if($surname = trim(htmlspecialchars($_POST['surname']))){
    $message .= 
'
Фамилия: '.$surname;}


if($tel = trim(htmlspecialchars($_POST['tel']))){
$message .=
'
Телефон: '.$tel;}

if($email = trim(htmlspecialchars($_POST['email']))){
$message .=
'
E-mail: '.$email;}

if($post = trim(htmlspecialchars($_POST['post']))){
$message .=
'
Должность: '.$post;}

if($company = trim(htmlspecialchars($_POST['company']))){
$message .=
'
Компания: '.$company;}

if($smi = trim(htmlspecialchars($_POST['name-smi']))){
$message .=
'
Наименование СМИ: '.$smi;}

if($form = trim(htmlspecialchars($_POST['form']))){
$message .=
'
Форма участия: '.$form;}



$message = wordwrap($message, 70, "\r\n");

if (mail($mail_to, 'Сообщение от Gen-dir', $message)){
    echo json_encode('ok');
}else{
    echo json_encode('err');
}

?>
