import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/core-services.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  $loginObservable: Subscription;

  username = new FormControl('');

  login: any;


  constructor(private loginSvc: LoginService, private router: Router) {
    this.login = this.loginSvc.getLogin();
  }
  

  signIn(email: string): void {    
    this.loginSvc.signIn(email);
  }
  

  ngOnInit(): void {

    this.$loginObservable = this.loginSvc.loginSubject.subscribe({
      next: (login: any) => {
        this.login = login;
        if (this.login.isLoggedIn) {
          console.log('login was successful, navigating to access point.');
          this.router.navigate(['/access-point']);
        }
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
      }   
    })

  }
  
  ngOnDestroy(): void {
    
    this.$loginObservable.unsubscribe();

  }



}
