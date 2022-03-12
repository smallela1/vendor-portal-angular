import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';

import { setTheme } from 'ngx-bootstrap/utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { UpdatesComponent } from './modules/updates/updates.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchResultsComponent } from './modules/search-results/search-results.component';
import { GetContractComponent } from './modules/get-contract/get-contract.component';
import { SearchBarComponent } from './modules/search-bar/search-bar.component';
import { ToolboxComponent } from './modules/home/toolbox/toolbox.component';
import { HelpBlockComponent } from './modules/home/help-block/help-block.component';
import { LocatorsComponent } from './modules/home/locators/locators.component';
import { AdBlockComponent } from './modules/home/ad-block/ad-block.component';
import { UnderstandingContractsComponent } from './modules/get-contract/understanding-contracts/understanding-contracts.component';
import { WhereToBeginComponent } from './modules/get-contract/where-to-begin/where-to-begin.component';
import { EducationComponent } from './modules/get-contract/education/education.component';
import { ManageYourContractComponent } from './modules/manage-your-contract/manage-your-contract.component';
import { ContractComplianceComponent } from './modules/manage-your-contract/contract-compliance/contract-compliance.component';
import { MarketResearchComponent } from './modules/manage-your-contract/market-research/market-research.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { UpdateLandingComponent } from './modules/update-landing/update-landing.component';
import { ProjectCenterComponent } from './modules/project-center/project-center.component';
import { LookupTablesComponent } from './modules/lookup-tables/lookup-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdatesComponent,
    HomeComponent,
    SearchResultsComponent,
    GetContractComponent,
    SearchBarComponent,
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
    PageNotFoundComponent,
    UpdateLandingComponent,
    ProjectCenterComponent,
    LookupTablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
