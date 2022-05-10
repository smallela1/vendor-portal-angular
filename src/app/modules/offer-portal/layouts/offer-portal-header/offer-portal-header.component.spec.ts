import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPortalHeaderComponent } from './offer-portal-header.component';

describe('OfferPortalHeaderComponent', () => {
  let component: OfferPortalHeaderComponent;
  let fixture: ComponentFixture<OfferPortalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPortalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
