import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPortalComponent } from './offer-portal.component';

describe('OfferPortalComponent', () => {
  let component: OfferPortalComponent;
  let fixture: ComponentFixture<OfferPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
