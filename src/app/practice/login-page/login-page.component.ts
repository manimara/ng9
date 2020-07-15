import { selectFeatureUid, selectFeatureUsername } from './../../select/index';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { login } from '../login-page.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as selectFeature from '../../select/index';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  login$: Observable<any>;
  count$: Observable<number>;
  userLoginForm : FormGroup;

  constructor(private store:Store<{count:number, login}>) {
    this.login$ = store.pipe(select('login'));
    // this.feature$ = store.pipe(select('feature'));
    this.count$ = store.pipe(select('count'));
   }

  ngOnInit(): void {
    this.userLoginForm = new FormGroup({
      'username': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
    })
  }

  // onSubmit(username,password){
  //   this.store.dispatch(login({username:username,password:password}))
  // }

  onSubmit(){
    this.store.dispatch(
      login({
        username:this.userLoginForm.value.username,
        password:this.userLoginForm.value.password})
      );
      this.userLoginForm.reset();
  }
}
