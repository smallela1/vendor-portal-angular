import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// Modules
import { OfferPortalComponentsModule } from '../components/offer-portal-components.module';

// Components
import { OfferPortalMainLayoutComponent } from './offer-portal-main-layout/offer-portal-main-layout.component';
import { OfferPortalHeaderComponent } from './offer-portal-header/offer-portal-header.component';
import { OfferPortalFooterComponent } from './offer-portal-footer/offer-portal-footer.component';
import { OfferPortalWorkspaceLayoutComponent } from './offer-portal-workspace-layout/offer-portal-workspace-layout.component';



@NgModule({
  declarations: [
    OfferPortalMainLayoutComponent,
    OfferPortalHeaderComponent,
    OfferPortalFooterComponent,
    OfferPortalWorkspaceLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    OfferPortalComponentsModule,
  ],
  exports: [
    OfferPortalMainLayoutComponent,
    OfferPortalWorkspaceLayoutComponent,
  ]
})
export class OfferPortalLayoutsModule { }
