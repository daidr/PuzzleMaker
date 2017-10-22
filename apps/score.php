<?php
	error_reporting(0);
	header('Server: PuzzleServer');
	include('Requests-1.7.0/library/Requests.php');
	Requests::register_autoloader();

	$uid = $_POST['id'];
	//$data = 'secret=s9xlSSrsOjtBgd8kPT7comyg&sitekey=DjrcXUshI3GJuza0LmsY9rz2&name='.$uid;
	//$url = "https://api.ppoi.org/user/balance";

	//$res = http_request($url, $data);

	$data = array('secret' => 's9xlSSrsOjtBgd8kPT7comyg', 'sitekey' => 'DjrcXUshI3GJuza0LmsY9rz2', 'name' => $uid);
	$res = Requests::post('https://api.ppoi.org/user/balance', array(), $data);
	$res = $res->body;
	if ($res == "") {
		echo "error";
		exit;
	}

	$json=json_decode($res);
	if ($json->success){
		$score = (int)((int)($json->total) / 100000);
		echo (string)$score;
	} else {
		echo "0";
	}
?>