<?php

$conn = mysqli_connect('127.0.0.1', 'root', '12345678', 'demo');

$query = mysqli_query($conn, 'select * from users');

while ($row = mysqli_fetch_assoc($query)) {
  $data[] = $row;
}

// 一行代码搞定
// 允许跨域请求
header('Access-Control-Allow-Origin: *');

header('Content-Type: application/json');
echo json_encode($data);
