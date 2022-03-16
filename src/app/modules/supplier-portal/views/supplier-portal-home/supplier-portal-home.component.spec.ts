import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPortalHomeComponent } from './supplier-portal-home.component';

describe('SupplierPortalHomeComponent', () => {
  let component: SupplierPortalHomeComponent;
  let fixture: ComponentFixture<SupplierPortalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPortalHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPortalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
