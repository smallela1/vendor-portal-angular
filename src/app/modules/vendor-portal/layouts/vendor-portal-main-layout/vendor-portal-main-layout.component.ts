import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendor-portal-main-layout',
  templateUrl: './vendor-portal-main-layout.component.html',
  styleUrls: ['./vendor-portal-main-layout.component.css']
})
export class VendorPortalMainLayoutComponent implements OnInit {

  @ContentChild('body', { static: false }) body: TemplateRef<any>;

  title = 'eoffer-ui';


  ngOnInit(): void {
  }

}
