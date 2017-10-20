<?php
$mysql_server_name='localhost';
$mysql_username='root';
$mysql_password='root';
$mysql_database='daidr';
$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting");
mysql_query("set names 'utf8'");
mysql_select_db($mysql_database);
?>