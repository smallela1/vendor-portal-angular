import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContractActLaborMatrixComponent } from './services-contract-act-labor-matrix.component';

describe('ServicesContractActLaborMatrixComponent', () => {
  let component: ServicesContractActLaborMatrixComponent;
  let fixture: ComponentFixture<ServicesContractActLaborMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesContractActLaborMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesContractActLaborMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
