import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SupplierPortalComponentsModule } from '../../supplier-portal/components/supplier-portal-components.module';

// Components
import { AccordionComponent } from './accordion/accordion.component';
import { FormAccordionComponent } from './form-accordion/form-accordion.component';
import { FormCardComponent } from './form-card/form-card.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { UswdsHeaderComponent } from './uswds-header/uswds-header.component';



@NgModule({
  declarations: [
    AccordionComponent, 
    FormAccordionComponent,
    CardComponent,
    FormCardComponent,
    ModalComponent,
    UswdsHeaderComponent, 
  ],
  imports: [
    CommonModule,
    AccordionModule,
    ModalModule.forRoot(),
    SupplierPortalComponentsModule,
  ],
  exports: [
    AccordionComponent, 
    FormAccordionComponent,
    CardComponent,
    FormCardComponent, 
    ModalComponent, 
  ],
})
export class CoreComponentsModule { }
