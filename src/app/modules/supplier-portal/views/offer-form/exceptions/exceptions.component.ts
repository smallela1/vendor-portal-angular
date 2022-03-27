import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exceptions',
  templateUrl: './exceptions.component.html',
  styleUrls: ['./exceptions.component.css']
})
export class ExceptionsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  @Input('offerStatusData') offerStatus: any;

  constructor() { }

  ngOnInit(): void {
  }

}
