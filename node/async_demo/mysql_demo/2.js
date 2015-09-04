/**
 * Created by Jaylee on 15/9/02.
 */

var mysql = require('mysql'),
    async = require('async');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});

var sqls = {
    insertSQL : "insert into user(name, age) values('abc', 12)",
    selectSQL : "select * from user",
    deleteSQL : "delete from user where name='abc'",
    updateSQL : "update user set name='aaa',age =1",
};

var tasks = ["insertSQL","selectSQL","deleteSQL","updateSQL"];

async.eachSeries(tasks, function(item, callback){
    console.log(item);
    conn.query(sqls[item], function (err, res) {
        console.log(res);
        callback(err, res);
    });

}, function(err){
    if ( err ) throw err;
    conn.end();
});
