import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantProjectExperienceComponent } from './relevant-project-experience.component';

describe('RelevantProjectExperienceComponent', () => {
  let component: RelevantProjectExperienceComponent;
  let fixture: ComponentFixture<RelevantProjectExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevantProjectExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantProjectExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
