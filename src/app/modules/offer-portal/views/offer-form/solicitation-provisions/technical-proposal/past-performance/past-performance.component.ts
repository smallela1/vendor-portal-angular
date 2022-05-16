import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-past-performance',
  templateUrl: './past-performance.component.html',
  styleUrls: ['./past-performance.component.css']
})
export class PastPerformanceComponent implements OnInit {

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
