import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsaNavigationLink, UsaStepIndicatorModel } from '@gsa-sam/ngx-uswds';

@Component({
  selector: 'app-vendor-resources',
  templateUrl: './vendor-resources.component.html',
  styleUrls: ['./vendor-resources.component.css']
})
export class VendorResourcesComponent implements OnInit {

  @Input() currentStep = 0;
  
  steps: UsaStepIndicatorModel[] = [
    { label: '1: Getting Ready' },
    { label: '2: Register' },
    { label: '3: How to Get a Contract' },
    { label: '4: How to Market to the Government' },
    { label: '5: How to Prepare an Offer' },
  ];

  hideLabels = false;
  centerLabels = true;
  displayCounters = false;
  smallCounters = false;
  headerPosition: 'top';
  disableStepSelection: false;

  
  items: UsaNavigationLink[] = [
    {
      id: '1',
      text: 'Home',
      path: '/home',
    },
    {
      id: '2',
      text: 'Vendor Resources',
      path: '/vendor-resources'
    }
  ];

  wrap = false;
  hideSingleCrumb = true;
  router: any;
  
  

  constructor(router: Router) {
    this.router = router;
   }

   onSelection($event: any) {
    this.router.navigate([$event.path]);
  }

  ngOnInit(): void {
  }

}
