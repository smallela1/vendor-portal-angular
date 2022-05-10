import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-offer-portal-main-layout',
  templateUrl: './offer-portal-main-layout.component.html',
  styleUrls: ['./offer-portal-main-layout.component.css']
})
export class OfferPortalMainLayoutComponent implements OnInit {

  @ContentChild('body', { static: false }) body: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
