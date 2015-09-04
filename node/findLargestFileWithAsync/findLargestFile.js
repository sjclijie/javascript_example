/**
 * Created by Jaylee on 15/7/31.
 */

var fs = require("fs");
var path = require("path");
var async = require("async");

/**
 *
 * series(tasks, [callback]) （多个函数依次执行，之间没有数据交换）
 * parallel(tasks, [callback]) （多个函数并行执行）
 * waterfall(tasks, [callback]) （多个函数依次执行，且前一个的输出为后一个的输入）
 * auto(tasks, [callback]) （多个函数有依赖关系，有的并行执行，有的依次执行）
 * whilst(test, fn, callback)（用可于异步调用的while）
 * until(test, fn, callback) （与while相似，但判断条件相反）
 * queue （可设定worker数量的队列）
 * iterator(tasks) （将几个函数包装为iterator）
 * apply(function, arguments..) （给函数预绑定参数）
 * nextTick(callback) （在nodejs与浏览器两边行为一致）
 *
 */

/*
module.exports = function(dir, callback){

    async.waterfall([

        function(next){
            fs.readdir(dir, function(err, files){
                next(err, files);
            });
        },
        function(files, next){
            console.log(files);
        },
        function(files, stats, next){
            console.log(files);
        }

    ], function(err){
        console.log(err);
    });
}
*/

module.exports = function(dir){

    async.waterfall(
        [
            function(next){

                fs.readdir(dir, function(err, files){

                    console.log(err)
                    console.log(files);

                });

                next(null,"bb");

            }, function(p1, p2, next){
                console.log(p1);
                console.log(p2);
                console.log(next);
            }
        ], function(err){
            console.log(err);
        }
    );
}
