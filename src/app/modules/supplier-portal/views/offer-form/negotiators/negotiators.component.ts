import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-negotiators',
  templateUrl: './negotiators.component.html',
  styleUrls: ['./negotiators.component.css']
})
export class NegotiatorsComponent implements OnInit {
  
  @Input('sectionData') sectionData: any;
  
  sectionName = "Negotiators";

  constructor() { }

  ngOnInit(): void {
  }

}
