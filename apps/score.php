<?php
	$uid = $_POST['id'];
	$data = 'secret=s9xlSSrsOjtBgd8kPT7comyg&sitekey=DjrcXUshI3GJuza0LmsY9rz2&name='.$uid;
	$url = "https://api.ppoi.org/user/balance";

	$res = http_request($url, $data);
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

   function http_request($url, $data = null)
	{
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
		if (!empty($data)){
			curl_setopt($curl, CURLOPT_POST, 1);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
		}
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
		$output = curl_exec($curl);
		curl_close($curl);
		return $output;
	}
?>