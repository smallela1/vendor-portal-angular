import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-status-indicator',
  templateUrl: './section-status-indicator.component.html',
  styleUrls: ['./section-status-indicator.component.scss']
})
export class SectionStatusIndicatorComponent implements OnInit {

  @Input('sectionStatus') sectionStatus = {
    status: 'incomplete',
    showStatus: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
