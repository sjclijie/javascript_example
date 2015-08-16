/**
 * Created by Jaylee on 15/8/16.
 */

/**
 * 这种方式在ie678里面失效，会返回ccc.js
 */
/*
;(function(){

    function getBasePath(){
        var nodes = document.getElementsByTagName("script");
        var node = nodes[nodes.length - 1];
        return document.querySelector ? node.src : node.getAttribute("src");
    }

    alert(getBasePath());
})();
*/

/*
;(function(){

    function getBasePath(){

        var nodes = document.getElementsByTagName("script");

        if (window.VBArray){

            for(var i=0; i<nodes.length; i++){
                if (nodes[i].readyState == "interactive"){
                    var node = nodes[i];
                    break;
                }
            }

        } else {
            var node = nodes[nodes.length - 1];
        }

        alert(node);

        return document.querySelector ? node.src : node.getAttribute("src");
    }

    alert(getBasePath());

})();
*/

/**
 * 利用Error对象
 */

;(function(){

    function getBasePath(){

        try {
            a.b.c()
        } catch (e) {
            if (e.fileName){
                return e.fileName; //firfox
            } else if(e.sourceURL){
                return e.sourceURL;  //safari
            }
        }

        var nodes = document.getElementsByTagName("script");

        var node = null;

        if ( window.VBArray ){

            alert(nodes);

            for(var i=nodes.length; i<0; i--){
                alert(i);
            }


        } else {

        }

    }

    alert(getBasePath());

})();
