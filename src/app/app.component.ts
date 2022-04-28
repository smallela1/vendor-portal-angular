import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, InjectionToken, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { fromEvent, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showScrollToTopBtn: boolean = false


  constructor( @Inject(ViewportScroller) private viewport: ViewportScroller ) {
      setTheme('bs4');
  }

  
  @HostListener('document:scroll', ['$event'])
  onScroll(event: any) {
    var scrollTop = event.target.scrollingElement.scrollTop;
    
    if( scrollTop > 10 ) {
      this.showScrollToTopBtn = true;
    } else {
      this.showScrollToTopBtn = false;
    }
  }


  scrollToTop():void {
    this.viewport.scrollToPosition([0,0]);
  }

}