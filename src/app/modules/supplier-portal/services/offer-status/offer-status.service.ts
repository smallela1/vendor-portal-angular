import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferStatusService {

  sectionStatusChanged = new Subject<any>();

  constructor() { }

  updateOfferStatus(status: string): void {
    this.sectionStatusChanged.next(status);
    console.log('New status is: ' + status);
  }


}
