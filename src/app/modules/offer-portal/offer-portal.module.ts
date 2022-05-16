import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgWizardModule } from 'ng-wizard';

// Modules
import { CoreModule } from '../core/core.module';
import { OfferPortalRoutingModule, routingComponents } from './offer-portal-routing.module';
import { OfferPortalLayoutsModule } from './layouts/offer-portal-layouts.module';
import { OfferPortalComponentsModule } from './components/offer-portal-components.module';

// Components
import { OfferPortalHomeComponent } from './views/offer-portal-home/offer-portal-home.component';

@NgModule({
  declarations: [
    routingComponents,
    OfferPortalHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    ModalModule,
    BsDropdownModule,
    BsDatepickerModule,
    NgxDatatableModule,
    OfferPortalRoutingModule,
    OfferPortalLayoutsModule,
    OfferPortalComponentsModule,
    CoreModule,    
    NgWizardModule,
  ], 
  exports: [
    routingComponents
  ]
})
export class OfferPortalModule { }
