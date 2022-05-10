import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPortalHomeComponent } from './offer-portal-home.component';

describe('OfferPortalHomeComponent', () => {
  let component: OfferPortalHomeComponent;
  let fixture: ComponentFixture<OfferPortalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPortalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPortalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
