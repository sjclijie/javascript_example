require.config({
    baseUrl:"js",
    paths:{
        jquery: "jquery-2.1.4"
    }
});

require(["selector"], function(query){
    
    var els = query(".wrapper");
    console.log(els);
});