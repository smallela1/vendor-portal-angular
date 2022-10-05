import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

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
import { environment } from 'src/environments/environment';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

const config = {
  issuer: environment.OKTA_ISSUER_URI,
  clientId: environment.OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback'
}
const oktaAuth = new OktaAuth(config);


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
    OktaAuthModule
  ],
  providers: [
    { 
      provide: OKTA_CONFIG, 
      useValue: { oktaAuth } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
