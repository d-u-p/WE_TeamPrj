/*
//返回值
function fn(){
    var name = "hello";
    return function(){
        return name;
    }
}
var fnc = fn();
fnc();

//函数赋值
var fn2;
function fn(){
    var name = "hello";
    fn2 = function(){
        return name;
    }
}
fn();
fn2();

//函数参数
function fn(){
    var name = "hello";
    return function(){
        return name;
    }
}
function fn2(f){
    var name = f();
}
fn2(fn());

//循环赋值
for(var i = 0 ;i<10;i++){
    (function(i){
        setTimeout(()=>{
            console.log(i);
        },1000);
    })(i)
}

//getter和setter
function fn(){
    var name = "hello";
    setName = function(n){
        name = n;
    }
    getName = function(){
        return name;
    }
    return {
        setName:setName,
        getName:getName
    }
}
var fn1 = fn();
fn1.setName('world');
fn1.getName();
*/

//执行自执行函数
var fn = (function(){
    return function(val){
        console.log(val);
    }
})();
fn(12); 