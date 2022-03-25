import { TestBed } from '@angular/core/testing';

import { OfferStatusService } from './offer-status.service';

describe('OfferStatusService', () => {
  let service: OfferStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
