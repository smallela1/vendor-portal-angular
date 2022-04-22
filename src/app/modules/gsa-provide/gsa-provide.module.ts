import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { GsaProvideRoutingModule, routedComponents } from './gsa-provide-routing.module';

// Packages
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { UsaBreadcrumbModule, UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';

// Modules
import { CoreModule } from '../core/core.module';

// Layouts
import { ESellLayoutsModule } from './layouts/e-sell-layouts.module';

// Components
import { ESellComponentsModule } from './components/e-sell-components.module';

@NgModule({
  declarations: [
    routedComponents,
  ],
  imports: [
    CommonModule,
    UsaBreadcrumbModule,
    UsaStepIndicatorModule,
    GsaProvideRoutingModule,
    ESellLayoutsModule,
    ESellComponentsModule,
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
export class GsaProvideModule { }
