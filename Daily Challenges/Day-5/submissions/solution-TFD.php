<?php 

// TODO: FIX -> If there's a number appear more than twice 
// in loop, it only print it twice.


function findMax($list){
    $max = $list[0];
    for($i = 0; $i<sizeof($list); $i++){
        if($max < $list[$i]) $max = $list[$i];
    }
    return $max;
}


function printPattern($list){
    $max = findMax($list);

    foreach($list as $value){
    for($i = 0;$i<$max-1;$i++){
        if($list[$i] < $max){
            echo " _ ";
        } else if($list[$i] >= $max){
            echo " * ";
        }
        
    }
    echo "<br>";
    $max--;
}
}
$list = array(7,9,11,5,4,2,8);
printPattern($list);

// find the max 

// print the pattern 
    // get a loop for rows
    // get a loop for cols

?>