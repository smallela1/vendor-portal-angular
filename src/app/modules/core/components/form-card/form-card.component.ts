import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  @ContentChild('formCardActions', { static: false }) formCardActions: TemplateRef<any>;
  @ContentChild('formCardBody', { static: false }) formCardBody: TemplateRef<any>;
  @ContentChild('formCardFooter', { static: false }) formCardFooter: TemplateRef<any>;

  @Input('sectionState') section: any;

  @Input('sectionStatus') sectionStatus: {
    status: 'incomplete',
    showStatus: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
