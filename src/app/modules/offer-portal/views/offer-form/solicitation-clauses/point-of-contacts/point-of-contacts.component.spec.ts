import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfContactsComponent } from './point-of-contacts.component';

describe('PointOfContactsComponent', () => {
  let component: PointOfContactsComponent;
  let fixture: ComponentFixture<PointOfContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointOfContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
