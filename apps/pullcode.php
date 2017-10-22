<?php

require("conn.php");
$uid = $_COOKIE["cqpm_uid"];
$account = $_COOKIE["weibojs_4031974087"];
$uidt = $_POST['uid'];
$pid = $_POST['pid'];

if($uid <> $uidt){echo "error";exit;}
if($uid == ""){echo "error";exit;}
if($pid == ""){echo "nopid";exit;}


$values_array = getUrlKeyValue("?".$account);
$account = $values_array['access_token'];

//$url = "https://api.weibo.com/2/account/get_uid.json?access_token=2.00n345vFHekr5E20a7291eed0JDp21";
$url = "https://api.weibo.com/2/account/get_uid.json?access_token=".$account;
$res = Requests::get($url);
$res = $res->body;

$json=json_decode($res);
if ($res == "") {
	echo "error";
	exit;
}

if ($json->error) {
	echo "error";
	exit;
} else {
	if($json->uid <> $uid){echo "error";exit;}
}

$pid_num = $uid . "-" . $pid;

$sql ="SELECT style FROM cqpmcodes WHERE `pid`='$pid_num'"; //SQL语句
$result = mysql_query($sql,$conn); //查询
while($row = mysql_fetch_array($result)){
	$thestyle = $row['style'];
	if($thestyle == ""){
		echo "empty";
		exit;
	}
	echo $thestyle;
}

function getUrlKeyValue($url)
	{
		$result = array();
		$mr     = preg_match_all('/(\?|&)(.+?)=([^&?]*)/i', $url, $matchs);
		if ($mr !== false) {
			for ($i = 0; $i < $mr; $i++) {
				$result[$matchs[2][$i]] = $matchs[3][$i];
			}
		}
		return $result;
	}
?>