import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-supplier-portal-main-layout',
  templateUrl: './supplier-portal-main-layout.component.html',
  styleUrls: ['./supplier-portal-main-layout.component.css']
})
export class SupplierPortalMainLayoutComponent implements OnInit {

  @ContentChild('body', { static: false }) body: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
