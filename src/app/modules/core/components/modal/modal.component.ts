import { Component, ContentChild, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { of } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  modalRef?: BsModalRef;

  @ContentChild('modalBody', { static: false }) modalBody: TemplateRef<any>;
  @ContentChild('modalFooter', { static: false }) modalFooter: TemplateRef<any>;

  @Input('modalTitle') modalTitle: string = 'Modal Title is Missing!';
  @Input('showModalBtnLabel') btnLabel: string = 'Open Modal';
  @Input('modalSize') modalSize: string;

  @Output('modalRef') 

  
  appLayout = document.getElementsByClassName('supplier-portal-layout');
  classSize = '';

  constructor(private modalService: BsModalService,) { 
  }

  ngOnInit(): void {
  }


  openModal(template: TemplateRef<any>): void {

    if( this.modalSize == 'xl') {
      this.classSize = 'modal-xl';
    } else if (this.modalSize == 'lg') {
      this.classSize = 'modal-lg';
    }

    this.modalRef = this.modalService.show(template, {
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

  blurBackground(modalRef): void {

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
