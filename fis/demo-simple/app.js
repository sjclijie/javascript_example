(function(){
    "use strict";

    console.log("Hello world");

})();

!function(){

    "use strict";

    console.log("Hello Jaylee");

    var html = __inline("./header.html");

    var js = __inline("./test.js");

    console.log(html);

    console.log(js);
}();
