import { Component, OnInit } from '@angular/core';
import { IHero } from './Hero.interface';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  heros: IHero [] ;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getHeros()
    }, 5000);
  }

  getHeros(){
    this.heros = [    {
      id: 1,
      name : 'Manimaran'
    },
    {
      id: 2,
      name: "dhivya"
    }];
  }

}
