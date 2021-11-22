<?php
$db = new PDO("sqlite:".__DIR__."/database.db");

$sql="CREATE TABLE IF NOT EXISTS `users`(
    ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
    username TEXT, 
    adddate TEXT,
    saves TEXT)";
$db->exec($sql);
?>