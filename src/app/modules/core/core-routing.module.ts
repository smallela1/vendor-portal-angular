import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

export const routedComponents = [
  PageNotFoundComponent,
]