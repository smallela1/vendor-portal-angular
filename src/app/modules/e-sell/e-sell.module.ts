import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ESellRoutingModule, routedComponents } from './e-sell-routing.module';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// Layouts
import { ESellLayoutsModule } from './layouts/e-sell-layouts.module';

// Components
import { ESellComponentsModule } from './components/e-sell-components.module';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    ESellRoutingModule,
    ESellLayoutsModule,
    ESellComponentsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),    
  ],
  exports: [
    routedComponents
  ],
  entryComponents: [
  ]
})
export class ESellModule { }
