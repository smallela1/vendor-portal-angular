import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negotiators',
  templateUrl: './negotiators.component.html',
  styleUrls: ['./negotiators.component.css']
})
export class NegotiatorsComponent implements OnInit {
  
  sectionName = "Negotiators";

  constructor() { }

  ngOnInit(): void {
  }

}
