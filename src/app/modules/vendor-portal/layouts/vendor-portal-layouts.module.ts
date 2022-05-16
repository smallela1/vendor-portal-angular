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
import { VendorPortalMainLayoutComponent } from './vendor-portal-main-layout/vendor-portal-main-layout.component';
import { VendorPortalHeaderComponent } from './vendor-portal-header/vendor-portal-header.component';
import { VendorPortalFooterComponent } from './vendor-portal-footer/vendor-portal-footer.component';

@NgModule({
  declarations: [
    VendorPortalMainLayoutComponent,
    VendorPortalHeaderComponent,
    VendorPortalFooterComponent,
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
    VendorPortalMainLayoutComponent
  ]
})
export class VendorPortalLayoutsModule { }
