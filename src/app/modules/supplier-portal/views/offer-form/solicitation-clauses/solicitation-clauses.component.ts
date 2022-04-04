import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';


@Component({
  selector: 'app-solicitation-clauses',
  templateUrl: './solicitation-clauses.component.html',
  styleUrls: ['./solicitation-clauses.component.css']
})
export class SolicitationClausesComponent implements OnInit {

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
