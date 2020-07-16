import { initialState } from './../counter/counter.reducer';
import { createReducer, on } from '@ngrx/store';
import { login, logout } from './login-page.actions';

const initialLoginState = {
  uid: '',
  loggedin: false,
  evenNums:[ 2,4,6],
  oddNums:[ 1,3,5],
};
const _loginReducer = createReducer(initialLoginState,
  on(login, (state, {username} ) => ({...state, uid: username, loggedin: true })),
  on(logout, ()=> initialLoginState)
);

export function LoginReducer(state, action){
  return _loginReducer(state, action);
}


export const feature = 'login';
