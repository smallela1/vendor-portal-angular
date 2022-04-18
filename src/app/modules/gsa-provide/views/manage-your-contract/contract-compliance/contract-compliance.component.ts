import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-compliance',
  templateUrl: './contract-compliance.component.html',
  styleUrls: ['./contract-compliance.component.scss']
})
export class ContractComplianceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isCollapsed = true;
  oneAtATime: boolean = true;

}

