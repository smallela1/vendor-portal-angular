import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-status-indicator',
  templateUrl: './section-status-indicator.component.html',
  styleUrls: ['./section-status-indicator.component.css']
})
export class SectionStatusIndicatorComponent implements OnInit {

  @Input('sectionStatus') sectionStatus = 'incomplete';

  constructor() { }

  ngOnInit(): void {
  }

}
