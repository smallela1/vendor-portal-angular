import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationClausesComponent } from './solicitation-clauses.component';

describe('SolicitationClausesComponent', () => {
  let component: SolicitationClausesComponent;
  let fixture: ComponentFixture<SolicitationClausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitationClausesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitationClausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
