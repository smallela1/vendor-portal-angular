import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESellMainLayoutComponent } from './e-sell-main-layout.component';

describe('ESellMainLayoutComponent', () => {
  let component: ESellMainLayoutComponent;
  let fixture: ComponentFixture<ESellMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESellMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESellMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
