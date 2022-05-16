import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationResponsibilityMattersComponent } from './certification-responsibility-matters.component';

describe('CertificationRegardingResponsibilityMattersComponent', () => {
  let component: CertificationResponsibilityMattersComponent;
  let fixture: ComponentFixture<CertificationResponsibilityMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationResponsibilityMattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationResponsibilityMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
