import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateExperienceComponent } from './corporate-experience.component';

describe('CorporateExperienceComponent', () => {
  let component: CorporateExperienceComponent;
  let fixture: ComponentFixture<CorporateExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
