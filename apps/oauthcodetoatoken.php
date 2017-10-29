<?php
	error_reporting(0);
	include('Requests-1.7.0/library/Requests.php');
	Requests::register_autoloader();

	$code = $_POST['code'];

	$data = array('client_id' => '4031974087', 'client_secret' => '7f4153911c7eb81562d9f51eec273c47', 'grant_type' => 'authorization_code','redirect_uri' => 'http://cqpm.daidr.me','code' => $code);
	$res = Requests::post('https://api.weibo.com/oauth2/access_token', array(), $data);
	$res = $res->body;
	if ($res == "") {
		echo "error";
		exit;
	}

	$json=json_decode($res);
	if ($json->access_token){
		$access_token = $json->access_token;
		$uid = $json->uid;
		$expires_in = $json->expires_in;
		echo $access_token . "|||||" . $uid . "|||||" . $expires_in;
	} else {
		echo $res;
	}
?>