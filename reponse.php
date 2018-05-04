<?php

header("Content-Type: text/plain");

$toto1 = isset($_GET['parametre1']) ? $_GET['parametre1'] :"";
$toto2 = isset($_GET['parametre2']) ? $_GET['parametre2'] :"";

if($toto1 != "" && $toto2 != ""){
    echo"C'est good !";
}

else{
    echo"No good !";
}
