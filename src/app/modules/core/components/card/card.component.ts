import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ContentChild('cardHeader', { static: false }) cardHeader: TemplateRef<any>;
  @ContentChild('cardActions', { static: false }) cardActions: TemplateRef<any>;
  @ContentChild('cardBody', { static: false }) cardBody: TemplateRef<any>;
  @ContentChild('cardFooter', { static: false }) cardFooter: TemplateRef<any>;

  @Input()
  cardTitle = "Card Title is Missing!";

  constructor() { }

  ngOnInit(): void {
  }

}
