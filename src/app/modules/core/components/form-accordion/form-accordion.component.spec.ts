import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccordionComponent } from './form-accordion.component';

describe('FormAccordionComponent', () => {
  let component: FormAccordionComponent;
  let fixture: ComponentFixture<FormAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
