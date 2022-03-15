import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { CoreRoutingModule } from './core-routing.module';

// Components
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
