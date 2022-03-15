import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatorsComponent } from './locators.component';

describe('LocatorsComponent', () => {
  let component: LocatorsComponent;
  let fixture: ComponentFixture<LocatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
