import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxFormComponent } from './sandbox-form.component';

describe('SandboxFormComponent', () => {
  let component: SandboxFormComponent;
  let fixture: ComponentFixture<SandboxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
