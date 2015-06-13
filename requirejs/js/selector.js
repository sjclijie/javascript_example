define(function() {
 
    function query(selector,context) {
        var s = selector,
            doc = document,
            regId = /^#[\w\-]+/,
            regCls = /^([\w\-]+)?\.([\w\-]+)/,
            regTag = /^([\w\*]+)$/,
            regNodeAttr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
         
        var context =
                context == undefined ?
                document :
                typeof context == 'string' ?
                doc.getElementById(context.substr(1,context.length)) :
                context;
                 
        if ( regCls.test(selector)){
            return context.getElementById(selector.substr(1,selector.length));
        }
        // 略...
    }     
    return query;
});