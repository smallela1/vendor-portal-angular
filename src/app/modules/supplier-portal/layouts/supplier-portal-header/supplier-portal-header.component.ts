import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PartialObserver, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-supplier-portal-header',
  templateUrl: './supplier-portal-header.component.html',
  styleUrls: ['./supplier-portal-header.component.css']
})
export class SupplierPortalHeaderComponent implements OnInit, OnDestroy {

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
        if (e.url == '/supplier-portal/offer') {
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
