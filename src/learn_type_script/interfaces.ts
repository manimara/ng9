interface LabeledValue {
    label: string;
    color?:boolean;
    readonly x : number;
}

function printLabel(labeledObj : LabeledValue): void{
    console.log(labeledObj.label);
}
let myObj = {
    label: "long charecter",
    size: 10,
    color: false,
    x:5
};

printLabel(myObj);
let mySearch : SearchFunction;
mySearch = function(src:string, subString: string): boolean{
    let r = src.search(subString);
    return r > -1;
}
interface SearchFunction {
    (src: string, subString: string): boolean
}


console.log(
    mySearch("manimaran", "mani"),
    mySearch("manimaran", "manif")
);


console.log("Indexed array");

interface StringArray{
    [index:number] : string
}
let myAr = ["manimaran", "siva"];

let myStr: string = myAr[0];

console.log(
    myStr,
    myAr
);


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function(a){ }) as Counter;
    // let counter : Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c2 = getCounter();
console.log(c2);
c2(10);
console.log(c2);
c2.reset();
console.log(c2);
c2.interval = 5.0;
console.log(c2);
