import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../core/services/core-services.module';

@Component({
  selector: 'app-vendor-portal',
  templateUrl: './vendor-portal.component.html',
  styleUrls: ['./vendor-portal.component.css']
})
export class VendorPortalComponent implements OnInit, OnDestroy {

  $loginObservable: Subscription;

  login: any;

  constructor(private loginSvc: LoginService) {
    this.login = this.loginSvc.getLogin();
   }
   
  ngOnInit(): void {

    this.$loginObservable = this.loginSvc.loginSubject.subscribe({
      next: (login: any) => {
        this.login = login;
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
