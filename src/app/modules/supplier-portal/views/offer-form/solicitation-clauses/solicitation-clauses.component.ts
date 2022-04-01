import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';


// Solicitation Clauses Subsections
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { HazardousMaterialsComponent } from './hazardous-materials/hazardous-materials.component';
import { CertificationRegardingResponsibilityMattersComponent } from './certification-regarding-responsibility-matters/certification-regarding-responsibility-matters.component';
import { InformationRegardingResponsibilityMattersComponent } from './information-regarding-responsibility-matters/information-regarding-responsibility-matters.component';
import { ExemptionFromServiceContractLaborStandardsComponent } from './exemption-from-service-contract-labor-standards/exemption-from-service-contract-labor-standards.component';



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

  subSections: any[] = subSections;

  constructor() {

    this.subSections = Object.keys(this.subSections).map(section => this.subSections[section]);
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


const subSections: any = {
  smallBusiness: {
      sectionId: 'basicInformation',
      title: "Small Business Program Representations (Mar 2020)",
      clauseNumber: '52.111-111',
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      applicableLevel: {
        largeCategory: 'All',
        subCategory: '',
        sin: ''
      },
      component: BasicInformationComponent
  },
  inforRegardingResponsibilityMatters: {
      sectionId: 'inforRegardingResponsibilityMatters',
      title: "Information Regarding Responsibility Matters (Oct 2018)",
      clauseNumber: '52.209-7',
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      applicableLevel: {
        largeCategory: 'All',
        subCategory: '',
        sin: ''
      },
      component: InformationRegardingResponsibilityMattersComponent
  },
  hazardousMaterials: {
      sectionId: 'hazardousMaterials',
      title: "Hazardous Material",
      clauseNumber: '52.223-3',
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      applicableLevel: {
        largeCategory: 'All',
        subCategory: '',
        sin: ''
      },
      component: HazardousMaterialsComponent
  },
  certRegardingResponsibilityMatters: {
      sectionId: 'certRegardingResponsibilityMatters',
      title: "Certification Regarding Responsibility Matters (Oct 2015)",
      clauseNumber: '52.209-5',
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      applicableLevel: {
        largeCategory: 'All',
        subCategory: '',
        sin: ''
      },
      component: CertificationRegardingResponsibilityMattersComponent
  },
  exemptionFromApplicationOfTheServiceContract: {
      sectionId: 'exemptionFromApplicationOfTheServiceContract',
      title: "Exemption from Application of the Service Contract Labor Standards to Contracts for Certain Services-Certification (Jun 2020)",
      clauseNumber: '52.111-111',
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      applicableLevel: {
        largeCategory: 'All',
        subCategory: '',
        sin: ''
      },
      component: ExemptionFromServiceContractLaborStandardsComponent
  },
}