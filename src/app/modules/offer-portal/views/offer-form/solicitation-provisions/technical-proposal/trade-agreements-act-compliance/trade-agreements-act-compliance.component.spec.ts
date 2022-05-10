import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAgreementsActComplianceComponent } from './trade-agreements-act-compliance.component';

describe('TradeAgreementsActComplianceComponent', () => {
  let component: TradeAgreementsActComplianceComponent;
  let fixture: ComponentFixture<TradeAgreementsActComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeAgreementsActComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAgreementsActComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
