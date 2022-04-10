import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-sell-main-layout',
  templateUrl: './e-sell-main-layout.component.html',
  styleUrls: ['./e-sell-main-layout.component.css']
})
export class ESellMainLayoutComponent implements OnInit {

  @ContentChild('body', { static: false }) body: TemplateRef<any>;

  title = 'eoffer-ui';


  ngOnInit(): void {
  }

}
