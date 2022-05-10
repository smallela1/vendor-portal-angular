import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalProposalComponent } from './technical-proposal.component';

describe('TechnicalProposalComponent', () => {
  let component: TechnicalProposalComponent;
  let fixture: ComponentFixture<TechnicalProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
