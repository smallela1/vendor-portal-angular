import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageYourContractComponent } from './manage-your-contract.component';

describe('ManageYourContractComponent', () => {
  let component: ManageYourContractComponent;
  let fixture: ComponentFixture<ManageYourContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageYourContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageYourContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
