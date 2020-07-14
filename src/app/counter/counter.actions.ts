import { createAction } from '@ngrx/store'

const increment = createAction('[Counter] increment');
const decrement = createAction('[Counter] decrement');
const reset = createAction('[Counter] reset');

export {
  increment,
  decrement,
  reset
};
