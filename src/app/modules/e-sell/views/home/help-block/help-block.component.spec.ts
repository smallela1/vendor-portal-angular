import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBlockComponent } from './help-block.component';

describe('HelpBlockComponent', () => {
  let component: HelpBlockComponent;
  let fixture: ComponentFixture<HelpBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
