import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-offer-portal-workspace-layout',
  templateUrl: './offer-portal-workspace-layout.component.html',
  styleUrls: ['./offer-portal-workspace-layout.component.css']
})
export class OfferPortalWorkspaceLayoutComponent implements OnInit {

  @ContentChild('aside', { static: false }) aside: TemplateRef<any>;
  @ContentChild('body', { static: false }) body: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
