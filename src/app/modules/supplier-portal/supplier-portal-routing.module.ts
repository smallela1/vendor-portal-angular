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
import { SandboxFormComponent } from './views/sandbox-form/sandbox-form.component';

const routes: Routes = [
 //{ path: 'supplier-portal', redirectTo: '/supplier-portal/org-selection', pathMatch: 'full'},

  { path: 'supplier-portal', component: SupplierPortalComponent, children: [
    { path: 'org-selection', component: OrgSelectionComponent },
    { path: 'home', component: SupplierPortalHomeComponent },

    { path: 'offer', component: OfferFormComponent, children: [
      { path: 'pathway-to-success', component: PathwayToSuccessComponent },
      { path: 'corporate-information', component: CorporateInformationComponent },
      { path: 'negotiators', component: NegotiatorsComponent },
      { path: 'available-offerings', component: AvailableOfferingsComponent },
      { path: 'standard-responses', component: StandardResponsesComponent },
      { path: 'solicitation-clauses', component: SolicitationClausesComponent },
      { path: 'solicitation-provisions', component: SolicitationProvisionsComponent },
      { path: 'exceptions', component: ExceptionsComponent },
      { path: 'upload-documents', component: UploadDocumentsComponent },
      { path: 'submit-offer', component: SubmitOfferComponent },
      { path: 'sandbox-form', component: SandboxFormComponent },
    ]},
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
  SandboxFormComponent,
]