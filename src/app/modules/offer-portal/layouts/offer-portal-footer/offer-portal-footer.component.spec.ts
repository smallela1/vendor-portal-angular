import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPortalFooterComponent } from './offer-portal-footer.component';

describe('OfferPortalFooterComponent', () => {
  let component: OfferPortalFooterComponent;
  let fixture: ComponentFixture<OfferPortalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPortalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
