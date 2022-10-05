import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';

// Components
import { VendorPortalComponent } from './vendor-portal.component';
import { HomeComponent } from './views/home/home.component';
import { AccessPointComponent } from './access-point/access-point.component';

import { SearchResultsComponent } from './views/search-results/search-results.component';
import { VendorResourcesComponent } from './views/vendor-resources/vendor-resources.component';
import { QuestionnaireComponent } from './views/questionnaire/questionnaire.component';

const routes: Routes = [


  { path: '', component: VendorPortalComponent, children : [
    { path: 'home', component: HomeComponent },
    { path: 'access-point', component: AccessPointComponent, canActivate: [ OktaAuthGuard ] },
    { path: 'vendor-resources', component: VendorResourcesComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorPortalRoutingModule { }

export const routedComponents = [
  VendorPortalComponent,
  HomeComponent,
  AccessPointComponent,
  SearchResultsComponent,
  VendorResourcesComponent,
  QuestionnaireComponent,
]
