import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { ProjectCenterComponent } from './modules/project-center/project-center.component';
import { UpdatesComponent } from './modules/updates/updates.component';
import { UpdateLandingComponent } from './modules/update-landing/update-landing.component';

import { SearchResultsComponent } from './modules/search-results/search-results.component';
import { GetContractComponent } from './modules/get-contract/get-contract.component';

import { UnderstandingContractsComponent } from './modules/get-contract/understanding-contracts/understanding-contracts.component';
import { WhereToBeginComponent } from './modules/get-contract/where-to-begin/where-to-begin.component';
import { EducationComponent } from './modules/get-contract/education/education.component';
import { ManageYourContractComponent } from './modules/manage-your-contract/manage-your-contract.component';
import { ContractComplianceComponent } from './modules/manage-your-contract/contract-compliance/contract-compliance.component';
import { MarketResearchComponent } from './modules/manage-your-contract/market-research/market-research.component';
import { LookupTablesComponent } from './modules/lookup-tables/lookup-tables.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';



const routes: Routes = [
{ path: 'app-home', component: HomeComponent },
{ path: 'app-project-center', component: ProjectCenterComponent },
{ path: 'app-update-landing', component: UpdateLandingComponent },
{ path: 'app-search-results', component: SearchResultsComponent },
{ path: 'app-understanding-contracts', component: UnderstandingContractsComponent },
{ path: 'app-where-to-begin', component: WhereToBeginComponent },
{ path: 'app-education', component: EducationComponent },
{ path: 'app-contract-compliance', component: ContractComplianceComponent },
{ path: 'app-lookup-tables', component: LookupTablesComponent },
{ path: '',   redirectTo: '/app-home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

