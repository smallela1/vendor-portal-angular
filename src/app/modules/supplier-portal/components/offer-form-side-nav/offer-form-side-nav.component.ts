import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-form-side-nav',
  templateUrl: './offer-form-side-nav.component.html',
  styleUrls: ['./offer-form-side-nav.component.css']
})
export class OfferFormSideNavComponent implements OnInit {

  constructor() { }

  menuItems = [
    { path: "pathway-to-success", name: "Pathway to Success", complete: true },
    { path: "corporate-information", name: "Corporate Information", complete: false },
    { path: "negotiators", name: "Negotiators", complete: false },
    { path: "available-offerings", name: "Available Offerings", complete: false },
    { path: "standard-responses", name: "Standard Responses", complete: false },
    { path: "solicitation-clauses", name: "Solicitation Clauses", complete: false },
    { path: "solicitation-provisions", name: "Solicitation Provisions", complete: false },
    { path: "exceptions", name: "Exceptions", complete: false },
    { path: "upload-documents", name: "Upload Documents", complete: false },
    { path: "submit-offer", name: "Submit Offer", complete: false },
    { path: "sandbox-form", name: "Sandbox Form", complete: false },
  ]

  ngOnInit(): void {
  }

}
