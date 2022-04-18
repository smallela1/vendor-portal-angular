import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-portal-home',
  templateUrl: './supplier-portal-home.component.html',
  styleUrls: ['./supplier-portal-home.component.scss']
})
export class SupplierPortalHomeComponent implements OnInit {

  constructor() { }

  ColumnMode = "force";

  savedOffers = {
    rows: [
      { offerId: '123456', schedule: 'In Progress', status: 'Incomplete', lastUpdate: '03/04/2022 2:38pm' },
      { offerId: '123456', schedule: 'In Progress', status: 'Incomplete', lastUpdate: '03/04/2022 2:38pm' },
      { offerId: '123456', schedule: 'In Progress', status: 'Incomplete', lastUpdate: '03/04/2022 2:38pm' },
    ],
    columns: [
      { name: 'Offer ID' }, 
      { name: 'Schedule' }, 
      { name: 'Last Update' }, 
      { name: 'Status' }, 
      { name: 'Actions' }
    ]}


    submittedOffers = {
      rows: [
        { offerId: '123456', schedule: 'In Progress', status: 'Signed', lastUpdate: '03/04/2022 2:38pm' },
        { offerId: '123456', schedule: 'In Progress', status: 'Signed', lastUpdate: '03/04/2022 2:38pm' },
        { offerId: '123456', schedule: 'In Progress', status: 'Signed', lastUpdate: '03/04/2022 2:38pm' },
      ],
      columns: [
        { name: 'Offer ID' }, 
        { name: 'Schedule' }, 
        { name: 'Last Update' }, 
        { name: 'Status' }, 
        { name: 'Actions' }
      ]}
  
  

  ngOnInit(): void {
  }

}
