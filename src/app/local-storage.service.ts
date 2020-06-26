import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getJsonToken() : string{
    return window.localStorage.getItem('JsonToken');
  }
  
  setJsonToken(val : string) : void{
    window.localStorage.setItem('JsonToken', val);
  }

  getPromise(){
    return Promise.resolve(5);
  }

  setTime(){
    // val = "mani"
    return setTimeout(()=>{
      // val = "maran"
      console.log("cool");
      
    }, 5000)
  }
}
