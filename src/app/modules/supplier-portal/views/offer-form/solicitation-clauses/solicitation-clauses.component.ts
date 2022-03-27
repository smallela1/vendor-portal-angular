import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitation-clauses',
  templateUrl: './solicitation-clauses.component.html',
  styleUrls: ['./solicitation-clauses.component.css']
})
export class SolicitationClausesComponent implements OnInit {

  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  constructor() {}

  ngOnInit(): void {
  }

}
