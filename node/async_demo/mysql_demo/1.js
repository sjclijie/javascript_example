/**
 * Created by Jaylee on 15/9/02.
 */

var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});


var insertSQL = "insert into user(name, age) values('abc', 12)";
var selectSQL = "select * from user";
var deleteSQL = "delete from user where name='abc'";
var updateSQL = "update user set name='aaa',age =1";

conn.query( insertSQL, function( err1, res1 ){

    if ( err1 ) throw err1;

    console.log( "insertSQL => ");
    console.log( res1 );

    conn.query(selectSQL, function( err2, res2 ){

        if ( err2 ) throw err2;

        console.log( "selectSQL => ");
        console.log( res2 );

        conn.query(deleteSQL, function( err3, res3 ){

            if ( err3 ) throw err3;

            console.log( "deleteSQL => ");
            console.log( res3 );

            conn.query(updateSQL, function( err4, res4 ){

                if ( err4 ) throw err4;

                console.log( "updateSQL => ");
                console.log( res4 );

                conn.end();
            });

        });

    });

} );
