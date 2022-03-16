import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { OrganizationDetailsBannerComponent } from './organization-details-banner/organization-details-banner.component';
import { OfferFormSideNavComponent } from './offer-form-side-nav/offer-form-side-nav.component';



@NgModule({
  declarations: [
    OrganizationDetailsBannerComponent,
    OfferFormSideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OrganizationDetailsBannerComponent,
    OfferFormSideNavComponent
  ],
})
export class SupplierPortalComponentsModule { }
