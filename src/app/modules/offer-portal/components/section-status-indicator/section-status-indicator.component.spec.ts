import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatusIndicatorComponent } from './section-status-indicator.component';

describe('SectionStatusIndicatorComponent', () => {
  let component: SectionStatusIndicatorComponent;
  let fixture: ComponentFixture<SectionStatusIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStatusIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
