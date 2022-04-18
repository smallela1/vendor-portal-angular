import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-form-side-nav',
  templateUrl: './offer-form-side-nav.component.html',
  styleUrls: ['./offer-form-side-nav.component.scss']
})
export class OfferFormSideNavComponent implements OnInit, AfterViewInit {

  @Input() menuItems = null;
  currentFragment: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.currentFragment = activeRoute.snapshot.fragment;
   }

  ngOnInit(): void {
  }
  
  scrollToElement(targetElement: string): void {
    this.router.navigate(['./supplier-portal/offer'], { fragment: targetElement });
  }

  ngAfterViewInit(): void {
    this.router.navigate(['./supplier-portal/offer'], { fragment: this.currentFragment });      
  }

}
