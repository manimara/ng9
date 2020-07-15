import { createAction, props } from '@ngrx/store';

const login = createAction(
  '[Login page] login',
  props<{ username: string, password: string }>()
);
const logout = createAction('[Login page] logout');

export {
  login,
  logout
};
