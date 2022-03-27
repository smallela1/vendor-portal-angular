import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-responses',
  templateUrl: './standard-responses.component.html',
  styleUrls: ['./standard-responses.component.css']
})
export class StandardResponsesComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  constructor() { }

  ngOnInit(): void {
  }

}
