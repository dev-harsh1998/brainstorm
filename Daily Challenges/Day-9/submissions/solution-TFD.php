<?php 
$asc = 65;
for($i=1;$i<=6;$i++){
    for($j=$i;$j<6;$j++){
        echo "| |"; //replace this with space.
    }
    for($j=1;$j<=(2*$i-1);$j++){
        
        if($i%2==0){
            echo chr($asc)."&nbsp;";
            $asc++;
        }else{
            echo "*&nbsp;&nbsp;";
        }
    }

    echo "<br>";
}
?>