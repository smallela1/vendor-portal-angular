import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchBarComponent
  ]
})
export class ESellComponentsModule { }
