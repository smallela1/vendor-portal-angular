import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESellFooterComponent } from './e-sell-footer.component';

describe('ESellFooterComponent', () => {
  let component: ESellFooterComponent;
  let fixture: ComponentFixture<ESellFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESellFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESellFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
