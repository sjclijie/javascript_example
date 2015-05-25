<?php
    
    function quickSort(&$haystack, $leftIndex, $rightIndex){
            
        if ( $leftIndex > $rightIndex ){
            return false;
        }

        $i = $leftIndex;
        $j = $rightIndex;
        $flag =  $haystack[$leftIndex];

        while( $i < $j ){

            while($haystack[$j] >= $flag && $j > $i){
                $j--;
            }

            while($haystack[$i] <= $flag && $i < $j){
                $i++;
            }

            if ( $i < $j ){
                $temp = $haystack[$i];
                $haystack[$i] = $haystack[$j];
                $haystack[$j] = $temp;
            }
        }

        //交换flag
        $haystack[$leftIndex] = $haystack[$i];
        $haystack[$i] = $flag;
        
        //递归调用
        quickSort($haystack, $leftIndex, $i-1);
        quickSort($haystack, $i+1, $rightIndex);
    }

    $arr = [5,1,8,3,6,9];

    quickSort($arr, 0, count($arr)-1);

    echo "<pre>";
    print_r($arr);




