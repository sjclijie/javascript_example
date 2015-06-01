
function loadjs(scriptFileName){

    var script = document.createElement("script");
    script.setAttribute("type","text/javascript");
    script.setAttribute("src", scriptFileName);
    script.setAttribute("id", "script_id");

    var script_id = document.getElementById("script_id");
    
    if (script_id){
        document.getElementsByTagName("head")[0].removeChild(script_id);;
    }

    document.getElementsByTagName("head")[0].appendChild(script);
}

var script_name = "http://php.jaylee.cc/jquery-1.9.1.js";

loadjs(script_name);



