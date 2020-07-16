import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import {scoreBoardReducer}from './scoreboard.reducer';
import { homeScore, awayScore, resetScore, setScores, Game} from './scoreboard.action'

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  game$: any;

  constructor(public store : Store<{game :Game}>) {
    this.game$ = store.pipe(select('game'))
   }

  ngOnInit(): void {
  }

  home(){
    this.store.dispatch(homeScore());
  }
  away(){
    this.store.dispatch(awayScore());
  }
  reset(){
    this.store.dispatch(resetScore());
  }
  _setScoreValue = {
    game : {
      home: 5,
      away:10,
    }
  }
  setScore(){
    this.store.dispatch(setScores(this._setScoreValue));
  }


}
