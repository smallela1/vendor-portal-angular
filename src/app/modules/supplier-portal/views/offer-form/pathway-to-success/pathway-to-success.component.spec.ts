import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwayToSuccessComponent } from './pathway-to-success.component';

describe('PathwayToSuccessComponent', () => {
  let component: PathwayToSuccessComponent;
  let fixture: ComponentFixture<PathwayToSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathwayToSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathwayToSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
