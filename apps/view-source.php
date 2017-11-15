<?php
error_reporting(0);
include('Requests-1.7.0/library/Requests.php');
Requests::register_autoloader();
$url = $_POST['url'];

$res = Requests::get($url);
$res = $res->body;
echo $res;
?>