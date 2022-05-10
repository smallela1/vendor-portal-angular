import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PartialObserver, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-portal-header',
  templateUrl: './offer-portal-header.component.html',
  styleUrls: ['./offer-portal-header.component.css']
})
export class OfferPortalHeaderComponent implements OnInit, OnDestroy {

  isCollapsed = false; 
  $routerSubscription: Subscription;
  showOffersLink = false;
  route: Router;

  constructor(route: Router) {
    this.route = route;
   }

   signOut(): void {
     this.route.navigate(['/home']);
   }

  ngOnInit(): void {
   this.$routerSubscription = this.route.events.subscribe({
    next: (event) =>  {
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
  }

  ngOnDestroy(): void {
    this.$routerSubscription.unsubscribe();
  }

}
