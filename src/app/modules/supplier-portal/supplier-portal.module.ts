import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SupplierPortalRoutingModule, routingComponents } from './supplier-portal-routing.module';
import { SupplierPortalLayoutsModule } from './layouts/supplier-portal-layouts.module';
import { SupplierPortalComponentsModule } from './components/supplier-portal-components.module';
import { SupplierPortalHomeComponent } from './views/supplier-portal-home/supplier-portal-home.component';


@NgModule({
  declarations: [
    routingComponents,
    SupplierPortalHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    SupplierPortalRoutingModule,
    SupplierPortalLayoutsModule,
    SupplierPortalComponentsModule
  ], 
  exports: [
    routingComponents
  ]
})
export class SupplierPortalModule { }
