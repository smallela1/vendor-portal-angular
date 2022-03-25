import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Components
import { OrganizationDetailsBannerComponent } from './organization-details-banner/organization-details-banner.component';
import { OfferFormSideNavComponent } from './offer-form-side-nav/offer-form-side-nav.component';
import { SectionStatusIndicatorComponent } from './section-status-indicator/section-status-indicator.component';



@NgModule({
  declarations: [
    OrganizationDetailsBannerComponent,
    OfferFormSideNavComponent,
    SectionStatusIndicatorComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule
  ],
  exports: [
    OrganizationDetailsBannerComponent,
    OfferFormSideNavComponent,
    SectionStatusIndicatorComponent,
  ],
})
export class SupplierPortalComponentsModule { }
