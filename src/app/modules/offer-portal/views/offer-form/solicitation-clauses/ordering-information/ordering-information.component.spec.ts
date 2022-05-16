import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingInformationComponent } from './ordering-information.component';

describe('OrderingInformationComponent', () => {
  let component: OrderingInformationComponent;
  let fixture: ComponentFixture<OrderingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
