import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @ContentChild('accordionHeader', { static: false }) accordionHeader: TemplateRef<any>;
  @ContentChild('accordionBody', { static: false }) accordionBody: TemplateRef<any>;
  @ContentChild('accordionFooter', { static: false }) accordionFooter: TemplateRef<any>;

  @Input() accordionTitle = "Accordion Title is Missing!";
  @Input() isStickyTop = false;

  constructor() { }

  ngOnInit(): void {
  }

}
