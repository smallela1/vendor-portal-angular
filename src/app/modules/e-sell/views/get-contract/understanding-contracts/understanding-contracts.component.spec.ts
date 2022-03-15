import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingContractsComponent } from './understanding-contracts.component';

describe('UnderstandingContractsComponent', () => {
  let component: UnderstandingContractsComponent;
  let fixture: ComponentFixture<UnderstandingContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandingContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
