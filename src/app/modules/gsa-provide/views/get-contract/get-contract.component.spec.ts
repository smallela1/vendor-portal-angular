import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContractComponent } from './get-contract.component';

describe('GetContractComponent', () => {
  let component: GetContractComponent;
  let fixture: ComponentFixture<GetContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
