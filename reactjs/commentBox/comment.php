<?php

    $author = $_POST["author"];
    $comment = $_POST["text"];

    $comments = json_decode(file_get_contents("./comment.json"),true);

    array_push( $comments, ["author"=>$author, "text"=>$comment]);

    $ret = file_put_contents("./comment.json", json_encode($comments));

    if ( $ret ){
        sleep(10);
        echo json_encode(["code"=>0, "message"=> $comments]);
    } else {
        echo json_encode(["code"=>500, "message"=>"failure"]);
    }
