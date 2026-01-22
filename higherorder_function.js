// passing the value from one function to another
function sum(a,b){
     return a+b;
}

console.log(sum(2,5));

let fun = function(c,d){
return c-d;
}

console.log(fun(2,4));

let Add= function(e,f){
    return e+f;
}

let Sub = function (e,f){
    return e-f;
}

let Func = function(operator , e, f){
    return operator(e,f);

}

console.log(Func(Add,2,3));
console.log(Func(Sub, 3,2));
