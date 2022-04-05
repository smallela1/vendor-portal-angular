import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-available-offerings',
  templateUrl: './available-offerings.component.html',
  styleUrls: ['./available-offerings.component.css']
})
export class AvailableOfferingsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  @ViewChild('sinModal') public sinModal: ModalComponent;
  @ViewChild('preponderanceModal') public preponderanceModal: ModalComponent;

  @ViewChild('sectionModal') public sectionModal: any;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  openSinModal(): void {
    this.sinModal.openModal();    
  }

  closeSinModal(): void {
    this.sinModal.closeModal()
  }

  saveSinForm(): void {
    this.sinModal.closeModal()
  }

  openPreponderanceModal(): void {
    this.preponderanceModal.openModal();    
  }

  closePreponderanceModal(): void {
    this.preponderanceModal.closeModal()
  }

  savePreponderanceForm(): void {
    this.preponderanceModal.closeModal()
  }

}
