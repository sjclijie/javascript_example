

/**
 * 我们想要把js文件下载到本地，但是执行，仅当我们想要执行的时候去执行
 *
 * <script type="cache/script" src="aaa.js"></script>
 *
 * webkit对于这种不认识的标签会直接删掉
 *
 * 可以使用object标签 或者 ajax
 *
 * ajax: 
 *      var xhr = new XMLHttpRequest();
 *      xhr.open("GET",url);
 *      xhr.send(null);
 *
 * 只能获取相同域下的资源
 *
 */ 

function cachejs(script_filename){

    var cache = document.createElement("object");
    cache.data = script_filename;
    cache.id = "cache_id";
    cache.width = 0;
    cache.height = 0;
    
    document.body.appendChild(cache);
}


