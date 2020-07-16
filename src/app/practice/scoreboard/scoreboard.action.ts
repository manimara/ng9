import {createAction, props} from '@ngrx/store';

export interface Game {
  home: number;
  away:number;
};

export const homeScore = createAction('[ScoreboardComponent] home score');
export const awayScore = createAction('[ScoreboardComponent] away score');
export const resetScore = createAction('[ScoreboardComponent] reset score');
export const setScores = createAction('[ScoreboardComponent] set score',
props<{game: Game}>());
