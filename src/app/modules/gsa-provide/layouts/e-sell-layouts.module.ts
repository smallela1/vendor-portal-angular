import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { UsaAccordionModule, UsaHeaderModule, UsaSearchModule, } from '@gsa-sam/ngx-uswds';

// Layouts
import { ESellMainLayoutComponent } from './e-sell-main-layout/e-sell-main-layout.component';
import { ESellHeaderComponent } from './e-sell-header/e-sell-header.component';
import { ESellFooterComponent } from './e-sell-footer/e-sell-footer.component';

@NgModule({
  declarations: [
      ESellMainLayoutComponent,
      ESellHeaderComponent,
      ESellFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    UsaAccordionModule,
    UsaHeaderModule,
    UsaSearchModule,
    
  ],
  exports: [
    ESellMainLayoutComponent
  ]
})
export class ESellLayoutsModule { }
