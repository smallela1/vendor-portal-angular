import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-of-contacts',
  templateUrl: './point-of-contacts.component.html',
  styleUrls: ['./point-of-contacts.component.css']
})
export class PointOfContactsComponent implements OnInit {

  section = {
    title: 'Points of Contacts',

    sectionStatus: {
      status: 'incomplete',
      showStatus: true
    },
    showSection: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
