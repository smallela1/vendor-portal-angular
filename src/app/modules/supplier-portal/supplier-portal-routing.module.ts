import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SupplierHomeComponent } from './views/supplier-home/supplier-home.component';
import { OrgSelectionComponent } from './views/org-selection/org-selection.component';
import { SupplierPortalComponent } from './supplier-portal.component';

const routes: Routes = [
  { path: 'supplier-portal', redirectTo: '/supplier-portal/org-selection'},

  { path: 'supplier-portal', component: SupplierPortalComponent, children: [
    { path: 'org-selection', component: OrgSelectionComponent},
    { path: 'home', component: SupplierHomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierPortalRoutingModule { }

export const routingComponents = [
  SupplierHomeComponent,
  OrgSelectionComponent,
  SupplierPortalComponent,
]