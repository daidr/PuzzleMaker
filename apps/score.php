<?php
	$uid = $_POST['id'];
	$data = 'secret=s9xlSSrsOjtBgd8kPT7comyg&sitekey=DjrcXUshI3GJuza0LmsY9rz2&name='.$uid;
	$url = "https://api.ppoi.org/user/balance";

	$data = array(
    'secret'=>'s9xlSSrsOjtBgd8kPT7comyg&sitekey=DjrcXUshI3GJuza0LmsY9rz2',
    'name'=>$uid
    ); 

	$query = http_build_query($data); 

	$options['http'] = array(
		 'timeout'=>60,
		 'method' => 'POST',
		 'header' => 'Content-type:application/x-www-form-urlencoded',
		 'content' => $query
		);

	$url = "https://api.ppoi.org/user/balance";
	$context = stream_context_create($options);
	$res = file_get_contents($url, false, $context);

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