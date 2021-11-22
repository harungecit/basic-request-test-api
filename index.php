<?php

$dateTime = new DateTime('now', new DateTimeZone('America/New_York')); 
echo $date = $dateTime->format("H");
$rand = rand(10, 50);
$usd1 = rand(15,25);
$usd2 = rand(30,50);

for($s=1; $s<=$rand;$s++){
    if($date > 7  && $date < 19){
        //gündüz

    }
    else{
        //gece

    }

    echo json_encode($data);
}

        $data = [];
        for($i=0; $i<10;$i++){
            $data[$i] = $rand;
        }
     // echo json_encode($data);

/*

if(isset($_POST)){
    if($_POST['auth_token'] == '9f09347cbce52e00fa72dba1ba53df93'){
        $rand = rand(40, 70);
        $data = [];
        for($i=0; $i<10;$i++){
            $data[$i] = $rand;
        }
    }
    else{
        $data = 'Unauthorized token';
    }phpserver.browser
    
}
*/
?>