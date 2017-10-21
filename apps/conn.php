<?php
$mysql_server_name='mysql.coding.io';
$mysql_username='user-C0YUg9csPs';
$mysql_password='!;)t{-x_L``G0S-p3ZcR';
$mysql_database='db-vDwMVW9bzh';
$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting");
mysql_query("set names 'utf8'");
mysql_select_db($mysql_database);
?>