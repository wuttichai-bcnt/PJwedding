<?php

$name = $_POST['name'];
$email = $_POST['email'];

$fp=fopen("datacollection.csv","a+"); //use a+ instead of w
fputcsv($fp, array($name, (string)$email), ',');
fclose($fp);

header( "location: https://wuttichai-bcnt.github.io/PJwedding/" );

?>