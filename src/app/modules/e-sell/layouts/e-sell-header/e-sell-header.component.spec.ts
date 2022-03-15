import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESellHeaderComponent } from './e-sell-header.component';

describe('ESellHeaderComponent', () => {
  let component: ESellHeaderComponent;
  let fixture: ComponentFixture<ESellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
