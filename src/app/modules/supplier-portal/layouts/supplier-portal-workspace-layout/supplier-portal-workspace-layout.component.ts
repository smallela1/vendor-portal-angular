import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-supplier-portal-workspace-layout',
  templateUrl: './supplier-portal-workspace-layout.component.html',
  styleUrls: ['./supplier-portal-workspace-layout.component.scss']
})
export class SupplierPortalWorkspaceLayoutComponent implements OnInit {

  @ContentChild('aside', { static: false }) aside: TemplateRef<any>;
  @ContentChild('body', { static: false }) body: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
