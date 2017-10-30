<?php
	error_reporting(0);
	include('Requests-1.7.0/library/Requests.php');
	Requests::register_autoloader();

	$account = $_COOKIE['access_token'];
	$url = "https://api.weibo.com/oauth2/revokeoauth2?access_token=".$account;
	$res = Requests::get($url);
	$res = $res->body;
	echo $res;
?>