<?php
error_reporting(0);
include('Requests-1.7.0/library/Requests.php');
Requests::register_autoloader();
require("conn.php");
$style = str_replace("\n","",$_POST['style']);
$code = str_replace("\n","",$_POST['code']);
$uid = $_COOKIE["cqpm_uid"];
$account = $_COOKIE["access_token"];
$uidt = $_POST['uid'];
$pid = $_POST['pid'];

if($uid <> $uidt){echo "error";mysqli_close($conn);exit;}
if($style == "" || $code == "" || $uid == ""){echo "error";mysqli_close($conn);exit;}
if($pid == ""){echo "nopid";mysqli_close($conn);exit;}


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
	echo "error";
	mysqli_close($conn);
	exit;
} else {
	if($json->uid <> $uid){echo "error";mysqli_close($conn);exit;}
}

$pid_num = $uid . "-" . $pid;

$sql ="SELECT pid FROM allcodes WHERE `uid`='$uid'"; //SQL语句
$result = mysqli_query($conn,$sql); //查询
while($row = mysqli_fetch_row($result)){
	$maxpidnum = $row[0];
}

if((int)$maxpidnum == 0){
	$sql = "INSERT INTO allcodes (uid,pid) VALUES (\"".$uid."\",\"5\")";
	mysqli_query($conn,$sql);
	$maxpidnum = "5";
}
if((int)$pid > (int)$maxpidnum){echo "exceed";mysqli_free_result($result);mysqli_close($conn);exit;}

$sql ="SELECT value FROM cqpmsys WHERE `key`='id'"; //SQL语句
$result = mysqli_query($conn,$sql); //查询
while($row = mysqli_fetch_row($result)){
	$allid = $row[0];
}

if(strstr($allid,"*".$pid_num."*")){
	$sql = "UPDATE cqpmcodes SET code = \"$code\",style=\"$style\" WHERE `pid`='$pid_num'";
	if(mysqli_query($conn,$sql)){
		echo "ok";
	} else {
		echo "error";
	}
} else {
	$sql = "UPDATE cqpmsys SET value = '".$allid."*".$pid_num."*' WHERE `key`='id'|||||";
	$sql .= "INSERT INTO cqpmcodes (pid,code,style) VALUES (\"" . $pid_num . "\",\"$code\",\"$style\")";

	$sql_array = explode('|||||',$sql);
	$isError = 0;
	for($index=0;$index<count($sql_array);$index++){
		if(mysqli_query($conn,$sql_array[$index])){
		} else {
			$isError = $isError + 1;
		}
	} 
	
	if($isError == 0){
		echo "ok";
	} else {
		echo "error";
	}
}

mysqli_free_result($result);
mysqli_close($conn);

$token = isset($_COOKIE['hooktoken']) && !empty($_COOKIE['hooktoken']) ? $_COOKIE['hooktoken'] : "empty";
$ip = isset($_COOKIE['hookip']) && !empty($_COOKIE['hookip']) ? $_COOKIE['hookip'] : "empty";
if($token="empty" || $ip="empty"){}else{
$data = array('token' => $token);
Requests::post('http://'.$ip.':30432', array(), $data);
}
?>