const len = 10;

class Employee {
    private _fullname: string;
    get fullname(){
        return this._fullname;
    }
    set fullname(newName: string){
        if(newName && newName.length > len){
            throw new Error("new name must be less than 10");
        }
        this._fullname = newName;
    }
}

let e = new Employee();
e.fullname = "Manimaran";
let e1 = new Employee();
e1.fullname = "ManimaranVellaichamy"

console.log(e.fullname, e1.fullname);
