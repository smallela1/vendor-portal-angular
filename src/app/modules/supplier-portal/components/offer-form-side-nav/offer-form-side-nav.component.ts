import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-form-side-nav',
  templateUrl: './offer-form-side-nav.component.html',
  styleUrls: ['./offer-form-side-nav.component.css']
})
export class OfferFormSideNavComponent implements OnInit {

  @Input() menuItems = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  scrollToElement(targetElement: string): void {
    this.router.navigate(['./supplier-portal/offer'], { fragment: targetElement });
    console.log("Ive been clicked! " + targetElement);
  }


}
