import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  loginSubject = new Subject<any>();
  
  login: any = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
    },
    isLoggedIn: false,
  }

  constructor() { }

  getLogin(): any {
    return this.login;
  }

  signIn(email: string): any {
    this.login.user.email = email;
    this.login.isLoggedIn = true;

    this.loginSubject.next(this.login);
  }

  signOut(): any {
    this.login.user.email = "";
    this.login.isLoggedIn = false;

    this.loginSubject.next(this.login);
  }


}
