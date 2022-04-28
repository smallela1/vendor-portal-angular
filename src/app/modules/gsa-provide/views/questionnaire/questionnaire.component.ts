import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UsaStepIndicatorModel } from '@gsa-sam/ngx-uswds';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  
  @Input() currentStep = 0;
  
  steps: UsaStepIndicatorModel[] = [
    { label: 'Do You Qualify?' },
    { label: 'Market Demand' },
    { label: 'Results' },
  ];

  hideLabels = false;
  centerLabels = true;
  displayCounters = true;
  smallCounters = true;
  headerPosition: 'top';
  @Input() disableStepSelection: true;

  
  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalComponent.openModal();    
  }

  closeModal(): void {
    this.modalComponent.closeModal()
    this.currentStep = 0;
  }

  saveForm(): void {
    this.modalComponent.closeModal()
  }

  nextSection() {
    this.currentStep = this.currentStep + 1;
  }
  
  prevSection() {
    this.currentStep = this.currentStep - 1;
  }

}
