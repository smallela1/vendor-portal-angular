import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOfferingsComponent } from './available-offerings.component';

describe('AvailableOfferingsComponent', () => {
  let component: AvailableOfferingsComponent;
  let fixture: ComponentFixture<AvailableOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableOfferingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
