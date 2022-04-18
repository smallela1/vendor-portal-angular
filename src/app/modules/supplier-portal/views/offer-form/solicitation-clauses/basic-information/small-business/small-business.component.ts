import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-small-business',
  templateUrl: './small-business.component.html',
  styleUrls: ['./small-business.component.scss']
})
export class SmallBusinessComponent implements OnInit {

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
