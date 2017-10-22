<?php
include('Requests-1.7.0/library/Requests.php');
Requests::register_autoloader();

$mysql_server_name='mysql.coding.io';
$mysql_username='user-C0YUg9csPs';
$mysql_password='!;)t{-x_L``G0S-p3ZcR';
$mysql_database='db-vDwMVW9bzh';
$conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);

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


$result = $conn -> query("SELECT style FROM cqpmcodes WHERE `pid`='$pid_num'");　　
$row = $result -> fetch_row();
$thestyle = $row[0];
if($thestyle == ""){
	echo "empty";
	exit;
}
echo $thestyle;

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