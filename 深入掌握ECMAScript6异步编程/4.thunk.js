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


