<?php
header("Access-Control-Allow-Origin:*");
$result = array(
    'code' => '1',
    'message' => '2',
    'data' =>'3'
);
echo json_encode($result);
?>