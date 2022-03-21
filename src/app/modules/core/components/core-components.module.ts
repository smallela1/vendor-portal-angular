import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AccordionModule } from 'ngx-bootstrap/accordion';

// Components
import { AccordionComponent } from './accordion/accordion.component';
import { FormAccordionComponent } from './form-accordion/form-accordion.component';



@NgModule({
  declarations: [
    AccordionComponent, 
    FormAccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports: [
    AccordionComponent, 
    FormAccordionComponent
  ],
})
export class CoreComponentsModule { }
