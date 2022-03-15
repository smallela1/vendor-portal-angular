import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-sell-header',
  templateUrl: './e-sell-header.component.html',
  styleUrls: ['./e-sell-header.component.css']
})
export class ESellHeaderComponent implements OnInit {
  
  isCollapsed = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
