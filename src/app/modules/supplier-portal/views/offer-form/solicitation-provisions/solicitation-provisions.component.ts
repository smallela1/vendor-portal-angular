import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitation-provisions',
  templateUrl: './solicitation-provisions.component.html',
  styleUrls: ['./solicitation-provisions.component.css']
})
export class SolicitationProvisionsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  constructor() { }

  ngOnInit(): void {
  }

}
