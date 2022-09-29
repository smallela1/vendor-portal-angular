import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { OktaCallbackComponent } from '@okta/okta-angular';



const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'login/callback', component: OktaCallbackComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: "reload",
      scrollOffset: [0, 163] // [x, y] // For Offesetting if for example, there is a fixed header with a height of 60px, y could then be set to 65 to preven cut off.
    }),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

