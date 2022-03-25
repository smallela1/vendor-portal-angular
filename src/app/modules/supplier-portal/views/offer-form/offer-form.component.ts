import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfferStatusService } from '../../services/supplier-portal-services.module';
import { SandboxFormComponent } from '../sandbox-form/sandbox-form.component';
import { AvailableOfferingsComponent } from './available-offerings/available-offerings.component';
import { CorporateInformationComponent } from './corporate-information/corporate-information.component';
import { ExceptionsComponent } from './exceptions/exceptions.component';
import { NegotiatorsComponent } from './negotiators/negotiators.component';
import { PathwayToSuccessComponent } from './pathway-to-success/pathway-to-success.component';
import { SolicitationClausesComponent } from './solicitation-clauses/solicitation-clauses.component';
import { SolicitationProvisionsComponent } from './solicitation-provisions/solicitation-provisions.component';
import { StandardResponsesComponent } from './standard-responses/standard-responses.component';
import { SubmitOfferComponent } from './submit-offer/submit-offer.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {

  $offerStatusObservable: Subscription;

  offerData = testOfferData;

  offerStatus = 'In Progress';

  constructor(private offerStatusSvc: OfferStatusService) { }

  ngOnInit(): void {

    this.$offerStatusObservable = this.offerStatusSvc.sectionStatusChanged.subscribe({
      next: (status: string) => {
        console.log("selection changed: " + status);
        this.offerStatus = status;
        switch (status) {
          case 'In Progress':
            this.offerData.sections.forEach(item => {
              item.sectionStatus = 'incomplete';
              item.isStatusVisible = true;
            });
            break;

          case 'Submitted':
            this.offerData.sections.forEach(item => {
              item.sectionStatus = 'complete';
              item.isStatusVisible = true;
            });
            break;

          case 'Signed':
            this.offerData.sections.forEach(item => {
              item.isStatusVisible = false;
            });
            break;

          case 'Awarded':
            this.offerData.sections.forEach(item => {
              item.isStatusVisible = false;
            });
            break;
        }
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }      
    });
    
  }

  offerSubmitted(isOfferSubmitted: boolean): void {
    if (isOfferSubmitted) {
      this.offerData.sections.forEach(item => {
        item.sectionStatus = 'complete';
        item.isStatusVisible = true;
      });
    }

  }


}


export const testOfferData = {
  sections: [
    { path: "pathway-to-success", name: "Pathway to Success", sectionStatus: 'complete', isStatusVisible: true, sectionId: "pathwayToSuccess", component: PathwayToSuccessComponent },
    { path: "corporate-information", name: "Corporate Information", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "corporateInformation", component: CorporateInformationComponent },
    { path: "negotiators", name: "Negotiators", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "negotiators", component: NegotiatorsComponent },
    { path: "available-offerings", name: "Available Offerings", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "availableOfferings", component: AvailableOfferingsComponent },
    { path: "standard-responses", name: "Standard Responses", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "standardResponses", component: StandardResponsesComponent },
    { path: "solicitation-clauses", name: "Solicitation Clauses", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "solicitationClauses", component: SolicitationClausesComponent },
    { path: "solicitation-provisions", name: "Solicitation Provisions", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "solicitationProvisions", component: SolicitationProvisionsComponent },
    // { path: "exceptions", name: "Exceptions", sectionStatus: 'incomplete', sectionId: "exceptions", component: ExceptionsComponent  },
    { path: "upload-documents", name: "Upload Documents", sectionStatus: 'incomplete', isStatusVisible: true, sectionId: "uploadDocuments", component: UploadDocumentsComponent },
    // { path: "submit-offer", name: "Submit Offer", sectionStatus: 'incomplete', sectionId: "submitOffer", component: SubmitOfferComponent  },
    // { path: "sandbox-form", name: "Sandbox Form", sectionStatus: 'incomplete', sectionId: "sandboxForm", component: SandboxFormComponent  },
  ]
}