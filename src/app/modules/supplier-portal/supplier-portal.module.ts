import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierPortalRoutingModule, routingComponents } from './supplier-portal-routing.module';
import { SupplierPortalLayoutsModule } from './layouts/supplier-portal-layouts.module';
import { SupplierPortalComponentsModule } from './components/supplier-portal-components.module';


@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    SupplierPortalRoutingModule,
    SupplierPortalLayoutsModule,
    SupplierPortalComponentsModule
  ], 
  exports: [
    routingComponents
  ]
})
export class SupplierPortalModule { }
