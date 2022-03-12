import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLandingComponent } from './update-landing.component';

describe('UpdateLandingComponent', () => {
  let component: UpdateLandingComponent;
  let fixture: ComponentFixture<UpdateLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
