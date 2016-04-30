/**
 * Created by Jaylee on 16/4/30.
 */

import fs from "fs";
import path from "path";

let counter = 0;
const extName = ".js";

function handleDir(dir){

    fs.readdir(dir, function(err, files){

        files.map( file => {

            let fullFileName = path.join(dir, file);

            fs.stat(fullFileName, function(err, stats){

                if (err ){
                    console.error("error occurs when processing", file, err);
                    return;
                }

                if (stats.isFile() && path.extname(file) == extName){

                    let thisCount = counter++;

                    //打开始log
                    console.log("start processing", fullFileName, '[' + thisCount + ']' );

                    fs.readFile( fullFileName, "utf-8", function(err, fileString){
                        if (err){
                            console.error("error occurs when processing", file, err);
                        }
                        //打结束log
                       console.log("finish processing", fullFileName, '['+ thisCount+']'); 
                    });
                } else if ( stats.isDirectory() ){
                    handleDir( fullFileName );
                }
            });
        } );
    });
}


handleDir("/Users/Jaylee/ng_sta/src");






