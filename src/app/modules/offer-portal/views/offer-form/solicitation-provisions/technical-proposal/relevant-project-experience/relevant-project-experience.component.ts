import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-relevant-project-experience',
  templateUrl: './relevant-project-experience.component.html',
  styleUrls: ['./relevant-project-experience.component.css']
})
export class RelevantProjectExperienceComponent implements OnInit {

  @Input('sectionData') section: any;
  @Input('offerStatus') offerStatus: any;
  
  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  @ViewChild('modHistoryModal') public modHistoryModal: ModalComponent;

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
