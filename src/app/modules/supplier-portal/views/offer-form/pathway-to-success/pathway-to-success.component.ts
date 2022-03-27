import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathway-to-success',
  templateUrl: './pathway-to-success.component.html',
  styleUrls: ['./pathway-to-success.component.css']
})
export class PathwayToSuccessComponent implements OnInit {

  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
