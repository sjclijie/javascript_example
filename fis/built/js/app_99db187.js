(function(){
    "use strict";

    console.log("Hello world");

})();

!function(){

    "use strict";

    console.log("Hello Jaylee");

    var html = "<h1>Header</h1>\n";

    var js = fis.match("*.{js,css,png,jpg}",{useHash:!0}),fis.match("*.css",{optimizer:fis.plugin("clean-css"),useSprite:!0}),fis.match("*.js",{optimizer:fis.plugin("uglify-js")}),fis.match("app.js",{release:"/js/$0"}),fis.media("prod").match("*.js",{optimizer:fis.plugin("uglify-js")}),fis.media("prod").match("*",{deploy:fis.plugin("http-push",{to:"/var/www_php/fis",receiver:"http://php.jaylee.cc/upload.php"})}),fis.match("::package",{spriter:fis.plugin("csssprites")}),fis.match("*",{deploy:fis.plugin("local-deliver",{to:"../built"})}),fis.media("qa").match("*",{deploy:fis.plugin("local-deliver",{to:"../qa"})});;

    console.log(html);

    console.log(js);
}();
