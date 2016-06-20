

//在js中只要一个对象正确实现了Symbol.iterator方法，那么它就可以被for in 遍历。

var student = {};

student[Symbol.iterator] = function(){
    let index = 1;
    return {
        next() {
            return { done: index > 10, value: index++ }
        }
    }
}

for(let item of student) {
    console.log(item);
}

