import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial-sales-practice',
  templateUrl: './commercial-sales-practice.component.html',
  styleUrls: ['./commercial-sales-practice.component.css']
})
export class CommercialSalesPracticeComponent implements OnInit {

  section = {
    title: 'Commercial Sales Practice (CSP-1)',
    sectionStatus: {
      status: 'incomplete',
      showStatus: true
    },
    showSection: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
