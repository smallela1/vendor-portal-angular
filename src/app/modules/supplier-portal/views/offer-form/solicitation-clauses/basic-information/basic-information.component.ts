import { Component, OnInit } from '@angular/core';

// Solicitation Clauses Subsections
import { CertificationResponsibilityMattersComponent } from './certification-responsibility-matters/certification-responsibility-matters.component';
import { HazardousMaterialsComponent } from './hazardous-materials/hazardous-materials.component';
import { InformationResponsibilityMattersComponent } from './information-responsibility-matters/information-responsibility-matters.component';
import { SmallBusinessComponent } from './small-business/small-business.component';
@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  subSections: any[] = subSections;

  constructor() {
    this.subSections = Object.keys(this.subSections).map(section => this.subSections[section]);
   }

  ngOnInit(): void {
  }

}


const subSections: any = {
  smallBusiness: {
      sectionId: 'smallBusiness',
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
      component: SmallBusinessComponent
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
      component: InformationResponsibilityMattersComponent
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
      component: CertificationResponsibilityMattersComponent
  }
}