import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsaProvideComponent } from './gsa-provide.component';

describe('GsaProvideComponent', () => {
  let component: GsaProvideComponent;
  let fixture: ComponentFixture<GsaProvideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsaProvideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsaProvideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
