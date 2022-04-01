import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationRegardingResponsibilityMattersComponent } from './information-regarding-responsibility-matters.component';

describe('InformationRegardingResponsibilityMattersComponent', () => {
  let component: InformationRegardingResponsibilityMattersComponent;
  let fixture: ComponentFixture<InformationRegardingResponsibilityMattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationRegardingResponsibilityMattersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationRegardingResponsibilityMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
