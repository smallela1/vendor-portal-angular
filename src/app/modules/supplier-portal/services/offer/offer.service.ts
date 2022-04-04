import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// Components
import { AvailableOfferingsComponent } from '../../views/offer-form/available-offerings/available-offerings.component';
import { CorporateInformationComponent } from '../../views/offer-form/corporate-information/corporate-information.component';
import { ExceptionsComponent } from '../../views/offer-form/exceptions/exceptions.component';
import { NegotiatorsComponent } from '../../views/offer-form/negotiators/negotiators.component';
import { PathwayToSuccessComponent } from '../../views/offer-form/pathway-to-success/pathway-to-success.component';
import { SolicitationClausesComponent } from '../../views/offer-form/solicitation-clauses/solicitation-clauses.component';
import { SolicitationProvisionsComponent } from '../../views/offer-form/solicitation-provisions/solicitation-provisions.component';
import { StandardResponsesComponent } from '../../views/offer-form/standard-responses/standard-responses.component';
import { SubmitOfferComponent } from '../../views/offer-form/submit-offer/submit-offer.component';
import { UploadDocumentsComponent } from '../../views/offer-form/upload-documents/upload-documents.component';
import { SandboxFormComponent } from '../../views/sandbox-form/sandbox-form.component';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  sectionStatusChanged = new Subject<any>();
  offerData = testOfferData;

  constructor() { }

  updateOfferStatus(status: string): void {
    console.log('New status is: ' + status);
    this.offerData.formStatus = status;

    for (var key in this.offerData.sections) {

      switch (status) {
        case 'In Progress':
          this.offerData.sections[key].sectionStatus.status = 'incomplete';
          this.offerData.sections[key].sectionStatus.showStatus = true;
          break;
        case 'Submitted':
          this.offerData.sections[key].sectionStatus.status = 'complete';
          this.offerData.sections[key].sectionStatus.showStatus = true;
          break;
        case 'Signed':
          this.offerData.sections[key].sectionStatus.status = 'incomplete';
          this.offerData.sections[key].sectionStatus.showStatus = false;
          break;
        case 'Awarded':
          this.offerData.sections[key].sectionStatus.status = 'incomplete';
          this.offerData.sections[key].sectionStatus.showStatus = false;
          break;

      }
    }

    this.sectionStatusChanged.next(status);
  }



  // offerSubmitted(isOfferSubmitted: boolean): void {
  //   if (isOfferSubmitted) {
  //     this.offerData.sections.forEach(item => {
  //       item.sectionStatus = 'complete';
  //       item.isStatusVisible = true;
  //     });
  //   }
  // }

  getOfferData(): any {
    return this.offerData;
  }

}



export const testOfferData = {
  sections: {
    pathwayToSuccess: {
        path: "pathway-to-success",
        name: "Pathway to Success",
        sectionStatus: {
          status: 'complete',
          showStatus: true,
        },
        sectionId: "pathwayToSuccess",
        showSection: true
    },
    corporateInformation: {
        path: "corporate-information",
        name: "Corporate Information",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "corporateInformation",
        component: CorporateInformationComponent,
        showSection: true
    },
    negotiators: {
        path: "negotiators",
        name: "Negotiators",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "negotiators",
        component: NegotiatorsComponent,
        showSection: true
    },
    availableOfferings: {
        path: "available-offerings",
        name: "Available Offerings",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "availableOfferings",
        component: AvailableOfferingsComponent,
        showSection: true
    },
    standardResponses: {
        path: "standard-responses",
        name: "Standard Responses",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "standardResponses",
        component: StandardResponsesComponent,
        showSection: true
    },
    solicitationClauses: {
        path: "solicitation-clauses",
        name: "Solicitation Clauses",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "solicitationClauses",
        component: SolicitationClausesComponent,
        showSection: true
    },
    solicitationProvisions: {
        path: "solicitation-provisions",
        name: "Solicitation Provisions",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "solicitationProvisions",
        component: SolicitationProvisionsComponent,
        showSection: true
    },
    exceptions: {
        path: "exceptions",
        name: "Exceptions",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "exceptions",
        component: ExceptionsComponent,
        showSection: false
    },
    uploadDocuments: {
        path: "upload-documents",
        name: "Upload Documents",
        sectionStatus: {
          status: 'incomplete',
          showStatus: true,
        },
        sectionId: "uploadDocuments",
        component: UploadDocumentsComponent,
        showSection: true
    },
},
  formStatus: 'In Progress'
}