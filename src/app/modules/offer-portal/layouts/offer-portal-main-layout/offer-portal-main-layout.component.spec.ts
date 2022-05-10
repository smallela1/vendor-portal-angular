import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPortalMainLayoutComponent } from './offer-portal-main-layout.component';

describe('OfferPortalMainLayoutComponent', () => {
  let component: OfferPortalMainLayoutComponent;
  let fixture: ComponentFixture<OfferPortalMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPortalMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPortalMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
