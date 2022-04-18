import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UswdsHeaderComponent } from './uswds-header.component';

describe('UswdsHeaderComponent', () => {
  let component: UswdsHeaderComponent;
  let fixture: ComponentFixture<UswdsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UswdsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UswdsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
