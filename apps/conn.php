<?php
$mysql_server_name=$_ENV['MYSQL_HOST'];
$mysql_username=$_ENV['MYSQL_USERNAME'];
$mysql_password=$_ENV['MYSQL_PASSWORD'];
$mysql_database=$_ENV['MYSQL_DBNAME'];
$conn=mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
?>