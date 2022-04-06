import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-commercial-sales-practice',
  templateUrl: './commercial-sales-practice.component.html',
  styleUrls: ['./commercial-sales-practice.component.css']
})
export class CommercialSalesPracticeComponent implements OnInit {
  
  @Input('offerStatus') offerStatus: any;
  
  @ViewChild(ModalComponent) modalComponent: ModalComponent;

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

  openModal(): void {
    this.modalComponent.openModal();    
  }

  closeModal(): void {
    this.modalComponent.closeModal()
  }

  saveForm(): void {
    this.modalComponent.closeModal()
  }

}