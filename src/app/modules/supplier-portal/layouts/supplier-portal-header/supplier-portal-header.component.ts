import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-portal-header',
  templateUrl: './supplier-portal-header.component.html',
  styleUrls: ['./supplier-portal-header.component.scss']
})
export class SupplierPortalHeaderComponent implements OnInit {

  isCollapsed = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
