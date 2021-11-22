<?php

$rand = rand(40, 70);
        $data = [];
        for($i=0; $i<10;$i++){
            $data[$i] = $rand;
        }
      echo json_encode($data);

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
    json_encode($data);
}
*/
?>