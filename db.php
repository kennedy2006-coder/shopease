<?php
$conn = new mysqli("localhost", "root" , "", "mywebsite" );
if($conn->connect_error) {

die("connection failed: " . $conn->connect_error);
}

 
 ?>