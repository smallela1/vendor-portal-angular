import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SupplierPortalComponent } from './supplier-portal.component';
import { OrgSelectionComponent } from './views/org-selection/org-selection.component';
import { SupplierPortalHomeComponent } from './views/supplier-portal-home/supplier-portal-home.component';

// Offer Form
import { OfferFormComponent } from './views/offer-form/offer-form.component';
import { PathwayToSuccessComponent } from './views/offer-form/pathway-to-success/pathway-to-success.component';
import { CorporateInformationComponent } from './views/offer-form/corporate-information/corporate-information.component';
import { NegotiatorsComponent } from './views/offer-form/negotiators/negotiators.component';
import { AvailableOfferingsComponent } from './views/offer-form/available-offerings/available-offerings.component';
import { StandardResponsesComponent } from './views/offer-form/standard-responses/standard-responses.component';
import { SolicitationClausesComponent } from './views/offer-form/solicitation-clauses/solicitation-clauses.component';
import { SolicitationProvisionsComponent } from './views/offer-form/solicitation-provisions/solicitation-provisions.component';
import { ExceptionsComponent } from './views/offer-form/exceptions/exceptions.component';
import { UploadDocumentsComponent } from './views/offer-form/upload-documents/upload-documents.component';
import { SubmitOfferComponent } from './views/offer-form/submit-offer/submit-offer.component';

// Solicitation Clauses Subsections
import { BasicInformationComponent } from './views/offer-form/solicitation-clauses/basic-information/basic-information.component';
  import { SmallBusinessComponent } from './views/offer-form/solicitation-clauses/basic-information/small-business/small-business.component';
  import { HazardousMaterialsComponent } from './views/offer-form/solicitation-clauses/basic-information/hazardous-materials/hazardous-materials.component';
  import { CertificationResponsibilityMattersComponent } from './views/offer-form/solicitation-clauses/basic-information/certification-responsibility-matters/certification-responsibility-matters.component';
  import { InformationResponsibilityMattersComponent } from './views/offer-form/solicitation-clauses/basic-information/information-responsibility-matters/information-responsibility-matters.component';
import { CommercialSalesPracticeComponent } from './views/offer-form/solicitation-clauses/commercial-sales-practice/commercial-sales-practice.component';
import { PointOfContactsComponent } from './views/offer-form/solicitation-clauses/point-of-contacts/point-of-contacts.component';
import { OrderingInformationComponent } from './views/offer-form/solicitation-clauses/ordering-information/ordering-information.component';

// Solicitaion Provisions Subsections

import { TechnicalProposalComponent } from './views/offer-form/solicitation-provisions/technical-proposal/technical-proposal.component';
  import { CorporateExperienceComponent } from './views/offer-form/solicitation-provisions/technical-proposal/corporate-experience/corporate-experience.component';
  import { PastPerformanceComponent } from './views/offer-form/solicitation-provisions/technical-proposal/past-performance/past-performance.component';
  import { QualityControlComponent } from './views/offer-form/solicitation-provisions/technical-proposal/quality-control/quality-control.component';
  import { RelevantProjectExperienceComponent } from './views/offer-form/solicitation-provisions/technical-proposal/relevant-project-experience/relevant-project-experience.component';
  import { TradeAgreementsActComplianceComponent } from './views/offer-form/solicitation-provisions/technical-proposal/trade-agreements-act-compliance/trade-agreements-act-compliance.component';
import { ServicesContractActLaborMatrixComponent } from './views/offer-form/solicitation-provisions/services-contract-act-labor-matrix/services-contract-act-labor-matrix.component';

const routes: Routes = [
 //{ path: 'supplier-portal', redirectTo: '/supplier-portal/org-selection', pathMatch: 'full'},

  { path: 'supplier-portal', component: SupplierPortalComponent, children: [
    { path: 'org-selection', component: OrgSelectionComponent },
    { path: 'home', component: SupplierPortalHomeComponent },

    { path: 'offer', component: OfferFormComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierPortalRoutingModule { }

export const routingComponents = [
  SupplierPortalComponent,
  OrgSelectionComponent,
  SupplierPortalHomeComponent,
  OfferFormComponent,
  PathwayToSuccessComponent,
  CorporateInformationComponent,
  NegotiatorsComponent,
  AvailableOfferingsComponent,
  StandardResponsesComponent,
  SolicitationClausesComponent,
  SolicitationProvisionsComponent,
  ExceptionsComponent,
  UploadDocumentsComponent,
  SubmitOfferComponent,
  BasicInformationComponent,
  SmallBusinessComponent,
  HazardousMaterialsComponent,
  CertificationResponsibilityMattersComponent,
  InformationResponsibilityMattersComponent,
  CommercialSalesPracticeComponent,
  PointOfContactsComponent,
  OrderingInformationComponent,
  TechnicalProposalComponent,
  CorporateExperienceComponent,
  PastPerformanceComponent,
  QualityControlComponent,
  RelevantProjectExperienceComponent,
  TradeAgreementsActComplianceComponent,
  ServicesContractActLaborMatrixComponent,
]