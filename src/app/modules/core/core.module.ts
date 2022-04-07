import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// Modules
import { CoreRoutingModule } from './core-routing.module';

// Components
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { CoreComponentsModule } from './components/core-components.module';

// Directives
import { StopClickPropagationDirective } from './directives/stop-click-propagation.directive';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    StopClickPropagationDirective,
  ],
  imports: [
    CommonModule,
    // RouterModule,
    CoreRoutingModule,
    CoreComponentsModule
  ],
  exports: [
    CoreComponentsModule,
    StopClickPropagationDirective,
  ]
})
export class CoreModule { }
