import { Component, OnInit } from '@angular/core';

// Services
import { OfferService } from '../../services/offer-portal-services.module';

@Component({
  selector: 'app-organization-details-banner',
  templateUrl: './organization-details-banner.component.html',
  styleUrls: ['./organization-details-banner.component.css']
})
export class OrganizationDetailsBannerComponent implements OnInit {


  constructor(private OfferService: OfferService ) { 
  }

  ngOnInit(): void {
  }

  updateStatus(newStatus: string): void {
    this.OfferService.updateOfferStatus(newStatus);
  }
  

}
