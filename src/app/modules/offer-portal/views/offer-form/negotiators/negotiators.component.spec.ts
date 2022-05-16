import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiatorsComponent } from './negotiators.component';

describe('NegotiatorsComponent', () => {
  let component: NegotiatorsComponent;
  let fixture: ComponentFixture<NegotiatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegotiatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
