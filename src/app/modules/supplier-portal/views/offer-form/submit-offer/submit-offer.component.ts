import { Component, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-offer',
  templateUrl: './submit-offer.component.html',
  styleUrls: ['./submit-offer.component.scss']
})
export class SubmitOfferComponent implements OnInit {

  @Input('offerStatusData') offerStatus = 'In Progress';

  constructor() { }

  ngOnInit(): void {
  }

}
