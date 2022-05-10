import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Modules
import { VendorPortalModule } from './modules/vendor-portal/vendor-portal.module';
import { OfferPortalModule } from './modules/offer-portal/offer-portal.module';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    VendorPortalModule,
    OfferPortalModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgWizardModule.forRoot(ngWizardConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
