import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardResponsesComponent } from './standard-responses.component';

describe('StandardResponsesComponent', () => {
  let component: StandardResponsesComponent;
  let fixture: ComponentFixture<StandardResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
