import { Component, ComponentRef, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-pathway-to-success',
  templateUrl: './pathway-to-success.component.html',
  styleUrls: ['./pathway-to-success.component.css']
})
export class PathwayToSuccessComponent implements OnInit {
  
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
