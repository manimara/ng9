
console.log("Variable declaration");

var var1 = "outside scope";
function scopeCheck(){
    var var1 = "my name is";
    return var1;
}


function scopeCheck1(){
    var var1 = "my name is in check1";
    return function(){
        var b = var1 + "in closure";
        return b;
    };
}

var g = scopeCheck1();

function blockScope(i: boolean){
    if(i){
        let i = 50;
        var x = 100;
    }
    return i;
}

const res1 = {
    a: 1,
    b:2,
    c:3
}
let {a,b}= res1;
let {a: a1, b: b1} = res1;


console.log(
    // scopeCheck(),
    // '\n',
    // g(),
    blockScope(true),
    blockScope(false),
    res1,
    a,b,
    a1,b1
);



console.log("spread operators");
let defaults = {
    food: "spicy",
    price: "$$",
    ambiance: "noisy",
    myFun(){
        return "function"
    }
}
let search = {...defaults, food:"rich"};
let search1 = {food:"rich", ...defaults};
class C {
    p = 12;
    m(){
        return "method on class C"
    }
}
let c1 = new C();
let clone = { ...c1 };


console.log(
    defaults,
    search,
    "search\n",
    search1,
    c1,
    clone,
    c1.m(),
    // clone.m()
);
