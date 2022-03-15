import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPortalMainLayoutComponent } from './supplier-portal-main-layout.component';

describe('SupplierPortalMainLayoutComponent', () => {
  let component: SupplierPortalMainLayoutComponent;
  let fixture: ComponentFixture<SupplierPortalMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPortalMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPortalMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
