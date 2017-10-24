<?php
error_reporting(0);
include('Requests-1.7.0/library/Requests.php');
Requests::register_autoloader();
require("conn.php");
$uid = $_POST['uid'];
$pid = $_POST['pid'];

if($uid == ""){echo "nouid";mysqli_close($conn);exit;}
if($pid == ""){echo "nopid";mysqli_close($conn);exit;}


$pid_num = $uid . "-" . $pid;

$sql ="SELECT code FROM cqpmcodes WHERE `pid`='$pid_num'"; //SQL语句
$result = mysqli_query($conn,$sql); //查询
while($row = mysqli_fetch_row($result)){
	$thestyle = $row[0];
	if($thestyle == ""){
		echo "empty";
		mysqli_free_result($result);
		mysqli_close($conn);
		exit;
	}
	$thecode = base64_decode($thestyle,true);
	if ($thecode){
		echo $thecode;
	} else {
		echo "error";
	}
	
}

mysqli_free_result($result);
mysqli_close($conn);
?>