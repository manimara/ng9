import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = "main component";
  constructor(private ls : LocalStorageService) { }
  jsonTokenValue: string = "";
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {

    this.jsonTokenValue = this.ls.getJsonToken();
    // return this.ls.getJsonToken();
  }

  setData(val:HTMLInputElement){
    this.ls.setJsonToken(val.value);
  }

  clearData(){
    this.ls.setJsonToken("");
  }
}
