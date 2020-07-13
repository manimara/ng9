import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup;
  userLoggedIn : boolean = false;
  constructor(private authService: AuthService) { }
  router: Router;
  ngOnInit(): void {
    this.loginUserForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    this.checkAndRedirect();
  }

  checkAndRedirect(){
    this.userLoggedIn = this.authService.isAuthenticated();
    if(this.userLoggedIn){
      this.router.navigate(['todo']);
    }
  }

  onSubmit() {
    let v =  this.loginUserForm.value;
    console.log(this.loginUserForm.value);
    this.authService.login(v.username, v.password);
  }

}
