import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfferService } from '../../services/supplier-portal-services.module';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {

  $offerStatusObservable: Subscription;

  offerData: any;
  menuItems: any[] = [];

  constructor(private offerSvc: OfferService) {
    this.offerData = this.offerSvc.getOfferData();
    this.menuItems = Object.keys(this.offerData.sections).map(section => this.offerData.sections[section]);
   }

  ngOnInit(): void {
    this.$offerStatusObservable = this.offerSvc.sectionStatusChanged.subscribe({
      next: (status: string) => {
        console.log("selection changed: " + status);       
        this.offerData = this.offerSvc.getOfferData();
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }      
    });

  }


}