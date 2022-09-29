import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { CoreRoutingModule, routedComponents } from './core-routing.module';

// Components
import { CoreComponentsModule } from './components/core-components.module';

// Directives
import { StopClickPropagationDirective } from './directives/stop-click-propagation.directive';

@NgModule({
  declarations: [
    routedComponents,
    StopClickPropagationDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CoreComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    routedComponents,
    CoreComponentsModule,
    StopClickPropagationDirective,
  ]
})
export class CoreModule { }
