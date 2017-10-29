<?php
	error_reporting(0);
	include('Requests-1.7.0/library/Requests.php');
	Requests::register_autoloader();

	$account = $_COOKIE['access_token'];
	$uid = $_POST['uid'];
	$url = "https://api.weibo.com/2/account/get_uid.json?access_token=".$account."&uid=".$uid;
	$res = Requests::get($url);
	$res = $res->body;
	echo $res;
?>