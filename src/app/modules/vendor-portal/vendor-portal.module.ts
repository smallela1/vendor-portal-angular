import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { VendorPortalRoutingModule, routedComponents } from './vendor-portal-routing.module';

// Packages
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { UsaBreadcrumbModule, UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';

// Modules
import { CoreModule } from '../core/core.module';

// Layouts
import { VendorPortalLayoutsModule } from './layouts/vendor-portal-layouts.module';

// Components
import { VendorPortalComponentsModule } from './components/vendor-portal-components.module';

@NgModule({
  declarations: [
    routedComponents,
  ],
  imports: [
    CommonModule,
    UsaBreadcrumbModule,
    UsaStepIndicatorModule,
    VendorPortalRoutingModule,
    VendorPortalLayoutsModule,
    VendorPortalComponentsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    CoreModule,
  ],
  exports: [
    routedComponents
  ],
  entryComponents: [
  ]
})
export class VendorPortalModule { }
