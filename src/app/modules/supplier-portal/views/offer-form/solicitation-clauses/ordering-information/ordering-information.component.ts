import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordering-information',
  templateUrl: './ordering-information.component.html',
  styleUrls: ['./ordering-information.component.css']
})
export class OrderingInformationComponent implements OnInit {

  remittanceAddressSection = {
    title: 'Remittance Address Information',
    sectionStatus: {
      status: 'incomplete',
      showStatus: true
    },
    showSection: true,
    template: 'remmittanceAddressInfo'
  }

  orderingReceiptSection = {
    title: 'Ordering Receipt Information',
    sectionStatus: {
      status: 'incomplete',
      showStatus: true
    },
    showSection: true,
    template: 'orderingReceiptInfo'
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}

