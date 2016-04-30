
var require = function(scriptFileName){
    var script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src", scriptFileName);
    document.getElementsByTagName("head")[0].appendChild(script);
}

var script_name = "http://php.jaylee.cc/jquery-1.9.1.js";

require(script_name);



