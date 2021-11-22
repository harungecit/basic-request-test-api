<?php
//include('connection.php');
$dateTime = new DateTime('now', new DateTimeZone('America/New_York')); 
$date = $dateTime->format("H");
$randSecond = rand(10, 50);
$usd1 = rand(15,25);
$usd2 = rand(30,50);
$data = null;
for($s=1; $s<=$randSecond;$s++){
    if($date > 7  && $date < 19){
        //gündüz
        $data = $usd1 + ($randSecond / 10);

        /*
        $list=[$username,$adddate,$saves];
        $sql = "INSERT INTO users (username, adddate, saves) VALUES (?,?,?,?)";
        $stmt = $db->prepare($sql);
        $stmt->execute($list);
        */
    }
    else{
        //gece
        $data = $usd2 + ($randSecond / 10);

    }

    echo json_encode($data);
}

/*

if(isset($_POST)){
    if($_POST['auth_token'] == '9f09347cbce52e00fa72dba1ba53df93'){
        
    }
    else{
        echo 'Unauthorized token';
    }
 
}
else{
    echo 'Token required';
}
*/
?>