import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationProvisionsComponent } from './solicitation-provisions.component';

describe('SolicitationProvisionsComponent', () => {
  let component: SolicitationProvisionsComponent;
  let fixture: ComponentFixture<SolicitationProvisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationProvisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationProvisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
