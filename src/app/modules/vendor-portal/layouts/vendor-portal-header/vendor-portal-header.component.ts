import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/modules/core/services/core-services.module';

import { UsaAccordionComponent } from '@gsa-sam/ngx-uswds';

@Component({
  selector: 'app-vendor-portal-header',
  templateUrl: './vendor-portal-header.component.html',
  styleUrls: ['./vendor-portal-header.component.css']
})
export class VendorPortalHeaderComponent implements OnInit {

  @ViewChild('infoTrainingSubMenu') infoTrainingSubMenu: UsaAccordionComponent;

  showBanner: boolean = false;

  isCollapsed = false;
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

  constructor(private loginSvc: LoginService, private router: Router) {
  }

  signIn(): void {
    this.loginSvc.signIn();
  }

  signOut(): void {
    this.loginSvc.signOut();
  }

  ngOnInit(): void {
  }

}
