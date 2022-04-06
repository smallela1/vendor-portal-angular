import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-ordering-information',
  templateUrl: './ordering-information.component.html',
  styleUrls: ['./ordering-information.component.css']
})
export class OrderingInformationComponent implements OnInit {
  
  @Input('offerStatus') offerStatus: any;

  @ViewChild('remittanceAddressModal') remittanceAddressModal: ModalComponent;
  @ViewChild('orderingReceiptModal') orderingReceiptModal: ModalComponent;

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

  openRemittanceAddressModal(): void {
    this.remittanceAddressModal.openModal();    
  }

  closeRemittanceAddressModal(): void {
    this.remittanceAddressModal.closeModal()
  }

  saveRemittanceAddressForm(): void {
    this.remittanceAddressModal.closeModal()
  }

  openOrderingReceiptModal(): void {
    this.orderingReceiptModal.openModal();    
  }

  closeOrderingReceiptModal(): void {
    this.orderingReceiptModal.closeModal()
  }

  saveOrderingReceiptForm(): void {
    this.orderingReceiptModal.closeModal()
  }


}

