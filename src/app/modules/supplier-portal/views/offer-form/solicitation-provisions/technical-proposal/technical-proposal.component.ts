import { Component, Input, OnInit } from '@angular/core';
import { CorporateExperienceComponent } from './corporate-experience/corporate-experience.component';
import { PastPerformanceComponent } from './past-performance/past-performance.component';
import { QualityControlComponent } from './quality-control/quality-control.component';
import { RelevantProjectExperienceComponent } from './relevant-project-experience/relevant-project-experience.component';
import { TradeAgreementsActComplianceComponent } from './trade-agreements-act-compliance/trade-agreements-act-compliance.component';

@Component({
  selector: 'app-technical-proposal',
  templateUrl: './technical-proposal.component.html',
  styleUrls: ['./technical-proposal.component.scss']
})
export class TechnicalProposalComponent implements OnInit {

  @Input('offerStatus') offerStatus: any;

  subSections: any = subSections;

  constructor() {}

  ngOnInit(): void {
  }

}



const subSections: any = {
  corporateExperience: {
      sectionId: 'corporateExperience',
      title: "Corporate Experience",
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      component: CorporateExperienceComponent
  },
  pastPerformance: {
      sectionId: 'pastPerformance',
      title: "Past Performance",
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      component: PastPerformanceComponent
  },
  qualityControl: {
      sectionId: 'qualityControl',
      title: "Quality Control",
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      component: QualityControlComponent
  },
  relevantProjectExperience: {
      sectionId: 'relevantProjectExperience',
      title: "Relevant Project Experience",
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      component: RelevantProjectExperienceComponent
  },
  tradeAgreementActCompliance: {
      sectionId: 'tradeAgreementActCompliance',
      title: "Trade Agreement Act (TAA) Compliance",
      sectionStatus: {
        status: 'incomplete',
        showStatus: true,
      },
      showSection: true,
      component: TradeAgreementsActComplianceComponent
  }
}