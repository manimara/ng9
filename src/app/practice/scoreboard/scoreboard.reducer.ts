import {createReducer, on } from '@ngrx/store';
import { homeScore, awayScore, resetScore, setScores, Game } from './scoreboard.action';

const scoreBoardInitialState : Game = {
  home:0,
  away:0
}



const _scoreBoard = createReducer(
  scoreBoardInitialState,
  on(homeScore, state => ({...state, home: state.home + 1})),
  on(awayScore, state => ({...state, away: state.away + 1})),
  on(resetScore, () => scoreBoardInitialState),
  on(setScores, (state, {game}) => ({
    ...state,
    home: game.home,
    away: game.away
  })),
)

export const scoreboardFeatureKey = 'game';

export function scoreBoardReducer(state,action) {
  return _scoreBoard(state,action);
}
