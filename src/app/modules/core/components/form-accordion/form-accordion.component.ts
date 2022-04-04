import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form-accordion',
  templateUrl: './form-accordion.component.html',
  styleUrls: ['./form-accordion.component.css']
})
export class FormAccordionComponent implements OnInit {
  
  @ContentChild('formAccordionHeader', { static: false }) formAccordionHeader: TemplateRef<any>;
  @ContentChild('formAccordionBody', { static: false }) formAccordionBody: TemplateRef<any>;
  @ContentChild('formAccordionFooter', { static: false }) formAccordionFooter: TemplateRef<any>;

  @Input('config') config = {
    title: 'Title is missing!',
    sectionStatus: {
      status: 'incomplete',
      showStatus: false,
    },
    parentOfferStatus: 'In Progress',
    isStickyTop: false,
    showSection: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
