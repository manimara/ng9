import { Injectable } from '@angular/core';
import '../../models/user.model';
import userModel from '../../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginSubject : Subject<boolean> = new Subject<boolean>();

  public getToken(): string {
    return localStorage.getItem('jwt-token');
    // return null;
  }
  private setToken(user): void {
    localStorage.setItem('jwt-token', 'qwerty');
    localStorage.setItem('user', user);
  }

  public isAuthenticated(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public login(user, pass) {
    if (this.isUserandPasswordMatch(user, pass)) {
      this.setToken(user);
      return true;
    }
    return null;
  }

  public logout(user, pass) {
    this.clearToken();
  }
  private clearToken() {
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('user');
  }
  private isUserandPasswordMatch(user: string, pass: string) {
    let returnalue = false;
    userModel.userslist.forEach(a => {
      console.log(a.user);
      if (a.user.toString() == user) {
        returnalue = (a.pass == pass);
      }
    })
    return returnalue;
  }


  constructor() { }
}
