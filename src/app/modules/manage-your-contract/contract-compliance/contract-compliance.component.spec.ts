import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractComplianceComponent } from './contract-compliance.component';

describe('ContractComplianceComponent', () => {
  let component: ContractComplianceComponent;
  let fixture: ComponentFixture<ContractComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
