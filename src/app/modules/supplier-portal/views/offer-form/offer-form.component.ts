import { Component, OnInit } from '@angular/core';
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


  formData = { sections: [
    { path: "pathway-to-success", name: "Pathway to Success", isComplete: true, sectionId: "pathwayToSuccess", component: PathwayToSuccessComponent },
    { path: "corporate-information", name: "Corporate Information", isComplete: false, sectionId: "corporateInformation", component: CorporateInformationComponent  },
    { path: "negotiators", name: "Negotiators", isComplete: false, sectionId: "negotiators", component: NegotiatorsComponent  },
    { path: "available-offerings", name: "Available Offerings", isComplete: false, sectionId: "availableOfferings", component: AvailableOfferingsComponent  },
    { path: "standard-responses", name: "Standard Responses", isComplete: false, sectionId: "standardResponses", component: StandardResponsesComponent  },
    { path: "solicitation-clauses", name: "Solicitation Clauses", isComplete: false, sectionId: "solicitationClauses", component: SolicitationClausesComponent  },
    { path: "solicitation-provisions", name: "Solicitation Provisions", isComplete: false, sectionId: "solicitationProvisions", component: SolicitationProvisionsComponent  },
    // { path: "exceptions", name: "Exceptions", isComplete: false, sectionId: "exceptions", component: ExceptionsComponent  },
    { path: "upload-documents", name: "Upload Documents", isComplete: false, sectionId: "uploadDocuments", component: UploadDocumentsComponent  },
    // { path: "submit-offer", name: "Submit Offer", isComplete: false, sectionId: "submitOffer", component: SubmitOfferComponent  },
    // { path: "sandbox-form", name: "Sandbox Form", isComplete: false, sectionId: "sandboxForm", component: SandboxFormComponent  },
  ]
}


  constructor() { }

  ngOnInit(): void {
  }

}
