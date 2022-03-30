import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-solicitation-provisions',
  templateUrl: './solicitation-provisions.component.html',
  styleUrls: ['./solicitation-provisions.component.css']
})
export class SolicitationProvisionsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  @ViewChild('sectionModal') public sectionModal: any;
  

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

}
