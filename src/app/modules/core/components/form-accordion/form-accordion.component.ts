import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.css']
})
export class FormAccordionComponent implements OnInit {
  
  @ContentChild('formAccordionBody', { static: false }) formAccordionBody: TemplateRef<any>;
  @ContentChild('formAccordionFooter', { static: false }) formAccordionFooter: TemplateRef<any>;

  @Input()
  formAccordionTitle = "Form Accordion Title is Missing!";

  @Input() sectionIsComplete = false;

  constructor() { }

  ngOnInit(): void {
  }

}
