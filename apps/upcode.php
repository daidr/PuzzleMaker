<?php
error_reporting(0);
require("conn.php");
$style = str_replace("\n","",$_POST['style']);
$code = str_replace("\n","",$_POST['code']);
$uid = $_COOKIE["cqpm_uid"];
$account = $_COOKIE["weibojs_4031974087"];
$uidt = $_POST['uid'];
$pid = $_POST['pid'];

if($uid <> $uidt){echo "error";exit;}
if($style == "" || $code == "" || $uid == ""){echo "error";exit;}
if($pid == ""){echo "nopid";exit;}


$values_array = getUrlKeyValue("?".$account);
$account = $values_array['access_token'];

$data = array(
    'access_token'=>$account
    );
$query = http_build_query($data);

$url = 'https://api.weibo.com/2/account/get_uid.json';

$res = file_get_contents($url.'?'.$query);

if ($res == "") {
	echo "error";
	exit;
}

$json=json_decode($res);


if ($json->error) {
	echo "error";
	exit;
} else {
	if($json->uid <> $uid){echo "error";exit;}
}

$pid_num = $uid . "-" . $pid;

$sql ="SELECT pid FROM allcodes WHERE `uid`='$uid'"; //SQL语句
$result = mysql_query($sql,$conn); //查询
while($row = mysql_fetch_array($result)){
	$maxpidnum = $row['pid'];
}

if((int)$maxpidnum == 0){
	$sql = "INSERT INTO allcodes (uid,pid) VALUES (\"".$uid."\",\"5\")";
	mysql_query($sql,$conn);
	$maxpidnum = "5";
}
if((int)$pid > (int)$maxpidnum){echo "exceed";exit;}

$sql ="SELECT * FROM cqpmsys WHERE `key`='id'"; //SQL语句
$result = mysql_query($sql,$conn); //查询
while($row = mysql_fetch_array($result)){
	$allid = $row['value'];
}

if(strstr($allid,"*".$pid_num."*")){
	$sql = "UPDATE cqpmcodes SET code = \"$code\",style=\"$style\" WHERE `pid`='$pid_num'";
	if(mysql_query($sql,$conn)){
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
		if(mysql_query($sql_array[$index],$conn)){
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