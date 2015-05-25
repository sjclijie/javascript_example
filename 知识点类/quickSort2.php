<?php
    
    function quickSort($arr){

        $count = count($arr);

        if ( $count <= 1){
            return $arr;
        }

        $leftArr = [];

        $rightArr = [];

        $key = $arr[0];

        for($i=1; $i<count($arr); $i++){
            if ( $arr[$i] <= $key ){
                $leftArr[] = $arr[$i];
            }else if ($arr[$i] > $key){
                $rightArr[] = $arr[$i];
            }
        }

        $array_left = quickSort($leftArr);

        $array_right = quickSort($rightArr);

        return array_merge($array_left, array($key), $array_right);
    }

    $arr = [5,1,8,3,6,9];

    echo "<pre>";
    print_r(quickSort($arr));
