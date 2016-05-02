# 编译器"传名调用"的实现，是将参数放到一个临时的函数中，再将这个临时函数传入到函数体中，这个临时函数就叫thunk函数

function f(m){
    return m*2;
} 

f( x + 5);

//等同于

var thunk = function(){
    return x + 5;
}

function f(m){
    return m()*2;
}


# 在javascript中，Thunk函数替换的不是表达式，而是多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数。

//正常多从参数版本
fs.readFile( filename, callback);

//Thunk版本的readFile
var readFileThunk = Thunk( fileName );
readFileThunk(callback);

var Thunk = function( fileName ){
    return function( callback ){
        return fs.readFile( fileName, callback);
    }
}

//thunk函数包装器

var Thunk = function(fn){

    return function(){
        var args = Array.prototype.slice.call(arguments);
        return function( callback ){
            args.push( callback );
            return fn.apply(this, args);
        }
    }
}

var readFileThunk = Thunk( fs.readFile );

readFile( fileName )( callback );




