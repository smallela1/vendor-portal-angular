import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-corporate-information',
  templateUrl: './corporate-information.component.html',
  styleUrls: ['./corporate-information.component.css']
})
export class CorporateInformationComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  @ViewChild('sectionModal') public sectionModal: any;
  @ViewChild('modHistoryModal') public modHistoryModal: ModalComponent;
  

  constructor() {
  }

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

  openModHistoryModal(): void {
    this.modHistoryModal.openModal();    
  }

  closeModHistoryModal(): void {
    this.modHistoryModal.closeModal()
  }

}
