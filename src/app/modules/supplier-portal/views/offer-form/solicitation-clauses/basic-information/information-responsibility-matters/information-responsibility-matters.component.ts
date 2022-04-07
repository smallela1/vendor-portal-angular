import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-information-responsibility-matters',
  templateUrl: './information-responsibility-matters.component.html',
  styleUrls: ['./information-responsibility-matters.component.css']
})
export class InformationResponsibilityMattersComponent implements OnInit {

  @Input('sectionData') section: any;
  @Input('offerStatus') offerStatus: any;
  
  @ViewChild(ModalComponent) public modalComponent: ModalComponent;

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