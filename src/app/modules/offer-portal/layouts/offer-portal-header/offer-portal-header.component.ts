import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PartialObserver, Subscriber, Subscription } from 'rxjs';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { LoginService } from 'src/app/modules/core/services/core-services.module';

@Component({
  selector: 'app-offer-portal-header',
  templateUrl: './offer-portal-header.component.html',
  styleUrls: ['./offer-portal-header.component.css']
})
export class OfferPortalHeaderComponent implements OnInit, OnDestroy {

  isCollapsed = false;
  $routerSubscription: Subscription;
  showOffersLink = false;
  isAuthenticated: boolean;
  userInfo: any = {
    name: 'Account',
    email: ''
  };

  constructor(private route: Router, private loginSvc: LoginService, @Inject(OKTA_AUTH) public oktaAuth: OktaAuth) {
  }

  signOut(): void {
    this.loginSvc.signOut();
  }

  async ngOnInit(): Promise<void> {

    this.$routerSubscription = this.route.events.subscribe({
      next: (event) => {
        var e: NavigationEnd;
        if (event instanceof NavigationEnd) {
          e = event;
          if (e.url == '/offer-portal/offer') {
            this.showOffersLink = true;
          } else {
            this.showOffersLink = false;
          }
        }
      }
    })

    try {
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();

      if (this.isAuthenticated) {
        const user = await this.oktaAuth.getUser();
        this.userInfo = {
          name: user.name,
          email: user.email
        };
      }

    } catch (error) {
      console.error(error)
    }


  }

  ngOnDestroy(): void {
    this.$routerSubscription.unsubscribe();
  }

}
