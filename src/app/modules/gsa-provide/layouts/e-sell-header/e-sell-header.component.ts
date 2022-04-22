import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/modules/core/services/core-services.module';

import { UsaAccordionComponent } from '@gsa-sam/ngx-uswds';

@Component({
  selector: 'app-e-sell-header',
  templateUrl: './e-sell-header.component.html',
  styleUrls: ['./e-sell-header.component.css']
})
export class ESellHeaderComponent implements OnInit, OnDestroy {

  @ViewChild('infoTrainingSubMenu') infoTrainingSubMenu: UsaAccordionComponent;
  
  $loginObservable: Subscription;

  showBanner: boolean = false;

  isCollapsed = false; 
  isLoggedIn: boolean = false;
   animation: boolean = true;
   activeIds: string[] = [];
   singleSelect: boolean;
   bordered: boolean;
   headerLevel: 2 | 3 | 4 | 5 | 6 = 4;


  toggleBanner() {
    this.showBanner = !this.showBanner;
  }
 
   onPanelChange($event: any) {
     console.log($event);
   }
 
   shown($event: any) {
     console.log($event);
   }
 
   hidden($event: any) {
     console.log($event);
   }

   show($event: any) {
     this.infoTrainingSubMenu.expand($event.panelId);
   }

  constructor(private loginSvc: LoginService, private router: Router ) {
    this.isLoggedIn = loginSvc.getLogin().isLoggedIn;
    console.log("user is logged in? " + this.isLoggedIn);

   }

   signOut(): void {
     this.loginSvc.signOut();
   }

    ngOnInit(): void {


    this.$loginObservable = this.loginSvc.loginSubject.subscribe({
      next: (login) => {
        this.isLoggedIn = login.isLoggedIn;
        console.log("user is logged in?" + this.isLoggedIn);
        
        if (!this.isLoggedIn) {
          console.log('logout was successful');
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
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
