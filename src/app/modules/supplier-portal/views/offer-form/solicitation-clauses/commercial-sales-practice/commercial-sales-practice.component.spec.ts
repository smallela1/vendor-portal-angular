import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSalesPracticeComponent } from './commercial-sales-practice.component';

describe('CommercialSalesPracticeComponent', () => {
  let component: CommercialSalesPracticeComponent;
  let fixture: ComponentFixture<CommercialSalesPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialSalesPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialSalesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
