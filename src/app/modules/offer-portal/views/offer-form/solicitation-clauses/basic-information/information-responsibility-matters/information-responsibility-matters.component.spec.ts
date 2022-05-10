import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationResponsibilityMattersComponent } from './information-responsibility-matters.component';

describe('InformationRegardingResponsibilityMattersComponent', () => {
  let component: InformationResponsibilityMattersComponent;
  let fixture: ComponentFixture<InformationResponsibilityMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationResponsibilityMattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationResponsibilityMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
