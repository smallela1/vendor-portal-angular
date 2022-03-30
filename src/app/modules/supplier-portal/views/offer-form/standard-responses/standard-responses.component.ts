import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modules/core/components/modal/modal.component';

@Component({
  selector: 'app-standard-responses',
  templateUrl: './standard-responses.component.html',
  styleUrls: ['./standard-responses.component.css']
})
export class StandardResponsesComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  @ViewChild('sectionModal') public sectionModal: any;
  
  standardResponseQuestions: any[] = standardResponseQuestions;
  subkQuestions: any[] = subkQuestions;

  constructor() {
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


const standardResponseQuestions: any[] = [
  { header: 'Disaster Purchasing', text: 'Does the offeror agree to voluntarily participate in the Recovery Purchasing Program as described in 552.238-113 SCOPE OF CONTRACT (ELIGIBLE ORDERING ACTIVITIES) (MAY 2019) and 552.238-114 USE OF FEDERAL SUPPLY SCHEDULE CONTRACTS BY NON-FEDERAL ENTITIES (MAY 2019)?' },
  { header: 'Exceptions To Terms And Conditions', text: 'Does the offeror take exception to any of the Terms and Conditions (Contract Clauses) presented in Part II of the Solicitation Document?(If "yes" is selected, the offeror must provide documentation for each contract clause selected for exception. The exception(s) the offeror requests will be negotiated with the GSA Contracting Official(s).)' },
  { header: 'Exceptions To Certs And Reps (52.212-3)', text: 'The offeror verifies by submission of this offer that the representations and certifications currently posted electronically at FAR 52.212-3, Offeror Representations and Certifications-Commercial Items, have been entered or updated in the last 12 months, are current, accurate, complete, and applicable to this solicitation (including the business size standard applicable to the NAICS code referenced for this solicitation), as of the date of this offer and are incorporated in this offer by reference? (If \'No\' is selected, the offeror must submit an attachment listing the paragraph(s) which have changed and identify, after each paragraph, what has changed. Please title the attachment, \'Exceptions to Certs and Reps-52.212-3.\')' },
  { header: 'Employment Eligibility Verification (Jan 2009)', text: 'As per the FAR, Clause 52.222-54, Employment Eligibility Verification (Jan 2009), Federal contractors and subcontractors are required to begin using the U.S. Citizenship and Immigration Services\' E-Verify system to verify their employees\' eligibility to legally work in the United States.' },
  { header: 'FASt Lane', text: 'Do you meet the criteria to participate in FASt Lane?' },
  { header: 'Start up Spring Board', text: 'Do you have less than 2 years of Corporate Experience?' },
  { header: 'Minimum Order Limit', text: 'Please enter the minimum order limit allowed on the contract:' },
]


const subkQuestions: any[] = [
  { text: 'Are you a "not for profit" entity?', yesLabel: 'Yes, We are not-for-profit entity.', noLabel: 'No, We are NOT a not-for-profit entity.' },
  { text: 'Are you a domestic firm, or a foreign firm?', yesLabel: 'Yes, We are a domestic firm.', noLabel: 'No, We are a foreign firm.' },
  { text: 'Based on the criteria of the NAICS code you have selected as your preponderance of work, would you be considered a small business, or an other-than-small business? ', yesLabel: 'Yes, We would be considered as a "small" business.', noLabel: 'No, We would be considered as "Other than small" business.' },
  { text: 'Are there any opportunities to subcontract work? ', yesLabel: 'Yes, there are opportunities to subcontract work', noLabel: ' No, there are ZERO opportunities.' },
]