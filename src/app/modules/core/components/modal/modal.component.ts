import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { of } from 'rxjs';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  
})
export class ModalComponent implements OnInit {

  @ViewChild('modalTemplate') public modalTemplate: TemplateRef<any>;
  

  @ContentChild('modalBody', { static: false }) modalBody: TemplateRef<any>;
  @ContentChild('modalFooter', { static: false }) modalFooter: TemplateRef<any>;

  @Input('config') config: any = {
    modalTitle: 'Modal Title is Missing!',
    showDefaultOpenButton: false,
    defaultOpenButtonLabel: 'Open Modal',
    showDefaultCloseButton: true,
    modalSize: ''
  };
    
  modalRef?: BsModalRef;

  appLayout = document.getElementsByClassName('supplier-portal-layout');
  classSize = '';

  constructor(
    private modalService: BsModalService) { 
    }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
  }


  openModal(): void {

    if( this.config.modalSize == 'xl') {
      this.classSize = 'modal-xl';
    } else if (this.config.modalSize == 'lg') {
      this.classSize = 'modal-lg';
    }

    this.modalRef = this.modalService.show(this.modalTemplate, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: this.classSize + ' bw-0',
      animated: true,
    });

    this.blurBackground(this.modalRef);
  }

  closeModal(): void {
    this.modalRef.hide();
  }


  // openModal(): void {

  //   if( this.modalSize == 'xl') {
  //     this.classSize = 'modal-xl';
  //   } else if (this.modalSize == 'lg') {
  //     this.classSize = 'modal-lg';
  //   }


  //   this.modalTemplate.show();
  // }

  // closeModal(): void {
  //   this.modalTemplate.hide();
  // }

  blurBackground(modalRef: BsModalRef): void {

    for (let i = 0; i < this.appLayout.length; i++) {
      this.appLayout.item(i).classList.add('blur');
    }

    modalRef.onHidden.subscribe({
      next: (event) => {
        for (let i = 0; i < this.appLayout.length; i++) {
          this.appLayout.item(i).classList.remove('blur');
        }
      }
    })
  }

}
