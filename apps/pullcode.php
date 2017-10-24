<?php
error_reporting(0);
include('Requests-1.7.0/library/Requests.php');
	Requests::register_autoloader();
require("conn.php");
$uid = $_COOKIE["cqpm_uid"];
$account = $_COOKIE["weibojs_4031974087"];
$uidt = $_POST['uid'];
$pid = $_POST['pid'];

if($uid <> $uidt){echo "error";mysqli_close($conn);exit;}
if($uid == ""){echo "error";mysqli_close($conn);exit;}
if($pid == ""){echo "nopid";mysqli_close($conn);exit;}


$values_array = getUrlKeyValue("?".$account);
$account = $values_array['access_token'];

//$url = "https://api.weibo.com/2/account/get_uid.json?access_token=2.00n345vFHekr5E20a7291eed0JDp21";
$url = "https://api.weibo.com/2/account/get_uid.json?access_token=".$account;
$res = Requests::get($url);
$res = $res->body;

$json=json_decode($res);
if ($res == "") {
	echo "error";
	mysqli_close($conn);
	exit;
}

if ($json->error) {
	echo "error";mysqli_close($conn);exit;
} else {
	if($json->uid <> $uid){echo "error";mysqli_close($conn);exit;}
}

$pid_num = $uid . "-" . $pid;

$sql ="SELECT style FROM cqpmcodes WHERE `pid`='$pid_num'"; //SQL语句
$result = mysqli_query($conn,$sql); //查询
while($row = mysqli_fetch_row($result)){
	$thestyle = $row[0];
	if($thestyle == ""){
		echo "empty";
		mysqli_free_result($result);
		mysqli_close($conn);
		exit;
	}
	echo $thestyle;
}

mysqli_free_result($result);
mysqli_close($conn);

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