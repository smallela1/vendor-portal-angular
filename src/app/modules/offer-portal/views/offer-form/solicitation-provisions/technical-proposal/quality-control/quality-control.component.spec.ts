import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityControlComponent } from './quality-control.component';

describe('QualityControlComponent', () => {
  let component: QualityControlComponent;
  let fixture: ComponentFixture<QualityControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
