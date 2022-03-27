import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-offerings',
  templateUrl: './available-offerings.component.html',
  styleUrls: ['./available-offerings.component.css']
})
export class AvailableOfferingsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  constructor() { }

  ngOnInit(): void {
  }

}
