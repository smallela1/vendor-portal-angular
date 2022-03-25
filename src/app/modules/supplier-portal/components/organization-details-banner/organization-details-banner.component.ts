import { Component, OnInit } from '@angular/core';

// Services
import { OfferStatusService } from '../../services/supplier-portal-services.module';

@Component({
  selector: 'app-organization-details-banner',
  templateUrl: './organization-details-banner.component.html',
  styleUrls: ['./organization-details-banner.component.css']
})
export class OrganizationDetailsBannerComponent implements OnInit {


  constructor(private offerStatusService: OfferStatusService ) { 
  }

  ngOnInit(): void {
  }

  updateStatus(newStatus: string): void {
    this.offerStatusService.updateOfferStatus(newStatus);
  }
  

}
