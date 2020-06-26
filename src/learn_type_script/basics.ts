/* Learn about Types */

let booleanTrue : boolean = true;
// let booleanFalse<boolean extends > = false;
// let booleanFalse = false;

interface GenericType{
    <T>(arg: T) : T;
}
function aaa<T>(arg : T): T{
    return arg;
}
// let booleanFalse: GenericType = aaa;
let booleanFalse: Array<true> = [];
// booleanFalse.push(123);

let decimal : number = 6;
let octalNum: number = 0x00d;

const array = [6, 0x0f, 0b1010, 0o77];
    array.forEach((a) => console.log(a));
console.log(
    booleanTrue,
    booleanFalse
);

//tyep enum

enum Color {"red", "black", "blue"};
const c: Color = Color.red;

function infiniteLoop() : never {
    while(true){
    }
}

let val : any = "this is string";
// let num : string = "234";
let num : number = (<string>val).length;
let num1 : number = (val as string).length;
