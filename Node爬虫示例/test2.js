/**
 * Created by Jaylee on 16/4/30.
 */

import fs from "fs";
import path from "path";



//对原生api进行包装,使之返回一个Promise以支持await
function readDir(path){

    return new Promise(function(resolve, reject){

        fs.readdir(path, function(err, files){
            if (err)  {
                reject(err);
                return;
            }  
            resolve(files);
        });
    });
}

function stats(file){

    return new Promise( function(resolve, reject){
        fs.stat(file, function(err, stats){
            if ( err ){
                reject(err);
                return;
            }
            resolve(stats);
        })   
    } );
}

function readFile(file, thisCount){

    return new Promise( function(resolve, reject){
        fs.readFile(file, 'utf-8', function(err, fileString){
            if (err){
                reject(err);
                return;
            }   
            //打结束log
            console.log("finish processing", file, '['+ thisCount+']'); 
            resolve(fileString);
        });
    });
}


let counter = 0;
const extName = ".js";

async function handleDir(dir){
    try {

        let files = await readDir(dir);;

        files.map( async file => {

            let fullFileName = path.join(dir, file);

            try {

                let stat = await stats(fullFileName);

                if ( stat.isFile() && path.extname(fullFileName) == extName){
                    let thisCount  = counter++;
                    //打开始log
                    console.log("start processing", fullFileName, '[' + thisCount + ']' );
                    readFile(fullFileName, thisCount);

                } else if (stat.isDirectory()){
                    handleDir(fullFileName);    
                }
            
            } catch (err){
                console.log("error occurs when processing", fullFileName, err);
            }
        } );

    
    } catch(err) {
        console.log("error occurs when readDir", dir, err);
    }
}


handleDir("/Users/Jaylee/ng_sta/src");
