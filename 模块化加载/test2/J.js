/**
 * Created by Jaylee on 15/9/14.
 */


//由于浏览器自上而下的分析DOM，当浏览器在解析我们的Javascript这个文件的时候，它就肯定是
//DOM树中最后加入的script标签
function getBasePath(){

    var nodes = document.getElementsByTagName("script");

    var node = nodes[nodes.length - 1];

    return document.querySelector ? node.src : node.getAttribute("src", 4);
}

console.log( getBasePath() );

//利用Error对象

function getBasePahtByError( ){

    var stack;

    try {  //Firefox可以直接new Error("test"); 但其它浏览器只会返回一个空Error

        a.b.c();  //强制报错，以便捕获e.stack

    } catch( e ){   //safari报错只会捕获line, sourceId, sourceURL

        stack = e.stack;

        if ( !stack && window.opera ){
            //Opera 9没有e.stack, 但有e.Backtrace，不能直接取得，需要对e对象转字符串后通过正则获取
            stack = ( (String(e).match(/of kinked script \S+/g)) || [] ).join(" ");
        }
    }

    console.log(stack);

    if ( stack ){

        /**
         *
         * e.stack 最后一行所支持的浏览器大致如下：
         *
         * Chrome 23:
         *      at http://xxx.xxx/J.js:4:1
         *
         *  FireFox 17:
         *      @http://xxx.xx/J.js:4
         *      @http://xxx.xxx/xxx.js:3
         *
         *  IE10:
         *      at Global code (http://xxx.xxx/J.js:4:1)
         *
         *  Firefox 4+ 可以用document.currentScript
         *
         */

        stack = stack.split(/[@ ]/g).pop();  //取得最后一行

        stack = stack[0] === "(" ? stack.slice(1, -1) : stack.replace(/\s/, "");  //去掉括号和空格

        return stack.replace( /(:\d+)?:\d+$/i, ""); //去掉换行符存在的出错的字符的起始位置
    }
}

console.log(getBasePahtByError());


