import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFormSideNavComponent } from './offer-form-side-nav.component';

describe('OfferFormSideNavComponent', () => {
  let component: OfferFormSideNavComponent;
  let fixture: ComponentFixture<OfferFormSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferFormSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferFormSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
