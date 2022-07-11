<?php
    $start_time = microtime();
    $r = $_POST['r'];
    $x = $_POST['x'];
    $y = $_POST['y'];
    $xx = $_POST['xx'];
    $out = "";
    $flag = 0;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!preg_match('/^-?\d+(\.|,)?\d*$/', $r) ||
            !preg_match('/^-?\d+(\.|,)?\d*$/', $x) ||
            !preg_match('/^-?\d+(\.|,)?\d*$/', $y))
            $flag = 1;
        if($x < -3 || $x > 5)
            $flag = 1;
        if($r< 1 || $r>3)
            $flag = 1;
        if($y<-2 || $y>2)
            $flag = 1;

        if((($x*$x + $y*$y) <= $r*$r && $x >=0 && $y >= 0)||
            ($y<=$r && $y>=0 && $x >= -1 * $r/2 && $x <= 0)||
            ($x+$y>=-$r && $x<=0 && $y<=0)){
            if($x == $xx) {
                $out = "Входит";
            }else{
                $out = "Не входит";
            }
        }else{
            $out = "Не входит";
        }

        $answer = $flag;
        $answer .= ";";
        $answer .= $x;
        $answer .= ";";
        $answer .= $y;
        $answer .= ";";
        $answer .= $r;
        $answer .= ";";
        $answer .= $out;
        $answer .= ";";
        $answer .= date("Y-m-d H:i:s");
        $answer .= ";";
        $answer .= microtime()-$start_time;
        $answer .= "/";
        echo $answer;
    }
?>