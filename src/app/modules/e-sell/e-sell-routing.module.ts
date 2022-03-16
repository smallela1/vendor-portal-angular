import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ESellComponent } from './e-sell.component';
import { UpdatesComponent } from './views/home/updates/updates.component';
import { HomeComponent } from './views/home/home.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';
import { GetContractComponent } from './views/get-contract/get-contract.component';
import { ToolboxComponent } from './views/home/toolbox/toolbox.component';
import { HelpBlockComponent } from './views/home/help-block/help-block.component';
import { LocatorsComponent } from './views/home/locators/locators.component';
import { AdBlockComponent } from './views/home/ad-block/ad-block.component';
import { UnderstandingContractsComponent } from './views/get-contract/understanding-contracts/understanding-contracts.component';
import { WhereToBeginComponent } from './views/get-contract/where-to-begin/where-to-begin.component';
import { EducationComponent } from './views/get-contract/education/education.component';
import { ManageYourContractComponent } from './views/manage-your-contract/manage-your-contract.component';
import { ContractComplianceComponent } from './views/manage-your-contract/contract-compliance/contract-compliance.component';
import { MarketResearchComponent } from './views/manage-your-contract/market-research/market-research.component';
import { ProjectCenterComponent } from './views/project-center/project-center.component';
import { LookupTablesComponent } from './views/lookup-tables/lookup-tables.component';
import { UpdateLandingComponent } from './views/update-landing/update-landing.component';

const routes: Routes = [


  { path: '', component: ESellComponent, children : [
    { path: 'home', component: HomeComponent },
    { path: 'project-center', component: ProjectCenterComponent },
    { path: 'update-landing', component: UpdateLandingComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'understanding-contracts', component: UnderstandingContractsComponent },
    { path: 'where-to-begin', component: WhereToBeginComponent },
    { path: 'education', component: EducationComponent },
    { path: 'contract-compliance', component: ContractComplianceComponent },
    { path: 'lookup-tables', component: LookupTablesComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ESellRoutingModule { }

export const routedComponents = [
  ESellComponent,
  UpdatesComponent,
  HomeComponent,
  SearchResultsComponent,
  GetContractComponent,
  ToolboxComponent,
  HelpBlockComponent,
  LocatorsComponent,
  AdBlockComponent,
  UnderstandingContractsComponent,
  WhereToBeginComponent,
  EducationComponent,
  ManageYourContractComponent,
  ContractComplianceComponent,
  MarketResearchComponent,
  ProjectCenterComponent,
  LookupTablesComponent,
  UpdateLandingComponent,
  
]
