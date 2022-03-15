import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPortalHeaderComponent } from './supplier-portal-header.component';

describe('SupplierPortalHeaderComponent', () => {
  let component: SupplierPortalHeaderComponent;
  let fixture: ComponentFixture<SupplierPortalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPortalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
