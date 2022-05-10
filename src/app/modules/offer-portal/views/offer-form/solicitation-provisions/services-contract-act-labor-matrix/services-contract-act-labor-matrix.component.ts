import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-services-contract-act-labor-matrix',
  templateUrl: './services-contract-act-labor-matrix.component.html',
  styleUrls: ['./services-contract-act-labor-matrix.component.css']
})
export class ServicesContractActLaborMatrixComponent implements OnInit {

  @Input('offerStatus') offerStatus: any;
  
  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  @ViewChild('modHistoryModal') public modHistoryModal: ModalComponent;


  section = {
    title: 'SCA Matrix',

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

  openModHistoryModal(): void {
    this.modHistoryModal.openModal();    
  }

  closeModHistoryModal(): void {
    this.modHistoryModal.closeModal()
  }

}
