import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemptionFromServiceContractLaborStandardsComponent } from './exemption-from-service-contract-labor-standards.component';

describe('ExemptionFromServiceContractLaborStandardsComponent', () => {
  let component: ExemptionFromServiceContractLaborStandardsComponent;
  let fixture: ComponentFixture<ExemptionFromServiceContractLaborStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemptionFromServiceContractLaborStandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemptionFromServiceContractLaborStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
