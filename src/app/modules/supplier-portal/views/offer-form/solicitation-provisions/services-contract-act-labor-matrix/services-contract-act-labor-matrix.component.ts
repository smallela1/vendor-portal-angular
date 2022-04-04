import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-contract-act-labor-matrix',
  templateUrl: './services-contract-act-labor-matrix.component.html',
  styleUrls: ['./services-contract-act-labor-matrix.component.css']
})
export class ServicesContractActLaborMatrixComponent implements OnInit {

  section = {
    title: 'SCA Matrix',

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
