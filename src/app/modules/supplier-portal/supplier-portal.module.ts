import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AccordionModule } from 'ngx-bootstrap/accordion';

// Modules
import { CoreModule } from '../core/core.module';
import { SupplierPortalRoutingModule, routingComponents } from './supplier-portal-routing.module';
import { SupplierPortalLayoutsModule } from './layouts/supplier-portal-layouts.module';
import { SupplierPortalComponentsModule } from './components/supplier-portal-components.module';

// Components
import { SupplierPortalHomeComponent } from './views/supplier-portal-home/supplier-portal-home.component';


@NgModule({
  declarations: [
    routingComponents,
    SupplierPortalHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    NgxDatatableModule,
    SupplierPortalRoutingModule,
    SupplierPortalLayoutsModule,
    SupplierPortalComponentsModule,
    CoreModule,
  ], 
  exports: [
    routingComponents
  ]
})
export class SupplierPortalModule { }
