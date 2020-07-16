import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  login: Login;
};

export interface Login{
  evenNums : number[],
  oddNums : number[],
}

export const selectEvenNumbers = createSelector(
  (state: State) => state.login.evenNums,
  evenNums => evenNums.reduce((prev,curr) => prev+curr)
);

export const selectOddNumbers = createSelector(
  (state: State) => state.login.oddNums,
  oddNums => oddNums.reduce((prev,curr) => prev+curr)
);

export const selectTotal = createSelector(
  selectEvenNumbers,
  selectOddNumbers,
  (eSum, oSum) => eSum + oSum
);

// console.log(
//   selectTotal({
//     evenNums: [2, 4],
//     oddNums: [1, 3],
//   })
// );

