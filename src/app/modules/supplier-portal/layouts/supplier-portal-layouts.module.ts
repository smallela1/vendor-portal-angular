import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// Components
import { SupplierPortalMainLayoutComponent } from './supplier-portal-main-layout/supplier-portal-main-layout.component';
import { SupplierPortalHeaderComponent } from './supplier-portal-header/supplier-portal-header.component';
import { SupplierPortalFooterComponent } from './supplier-portal-footer/supplier-portal-footer.component';



@NgModule({
  declarations: [
    SupplierPortalMainLayoutComponent,
    SupplierPortalHeaderComponent,
    SupplierPortalFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [
    SupplierPortalMainLayoutComponent,
  ]
})
export class SupplierPortalLayoutsModule { }
