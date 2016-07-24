
import fetch from "node-fetch"

fetch("https://api.github.com/users/github").then( function(res){

    return res.json();

}).then( function( body ){

    console.log( body );
} );

