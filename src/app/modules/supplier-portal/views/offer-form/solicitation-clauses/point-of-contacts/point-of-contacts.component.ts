import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-point-of-contacts',
  templateUrl: './point-of-contacts.component.html',
  styleUrls: ['./point-of-contacts.component.css']
})
export class PointOfContactsComponent implements OnInit {  
  
  @Input('offerStatus') offerStatus: any;

  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  @ViewChild('modHistoryModal') public modHistoryModal: ModalComponent;

  section = {
    title: 'Points of Contacts',

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