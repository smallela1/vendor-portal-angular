import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateInformationComponent } from './corporate-information.component';

describe('CorporateInformationComponent', () => {
  let component: CorporateInformationComponent;
  let fixture: ComponentFixture<CorporateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
