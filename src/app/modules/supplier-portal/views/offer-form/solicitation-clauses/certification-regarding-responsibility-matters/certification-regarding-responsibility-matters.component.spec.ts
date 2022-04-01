import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationRegardingResponsibilityMattersComponent } from './certification-regarding-responsibility-matters.component';

describe('CertificationRegardingResponsibilityMattersComponent', () => {
  let component: CertificationRegardingResponsibilityMattersComponent;
  let fixture: ComponentFixture<CertificationRegardingResponsibilityMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationRegardingResponsibilityMattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationRegardingResponsibilityMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
