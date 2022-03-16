import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPortalWorkspaceLayoutComponent } from './supplier-portal-workspace-layout.component';

describe('SupplierPortalWorkspaceLayoutComponent', () => {
  let component: SupplierPortalWorkspaceLayoutComponent;
  let fixture: ComponentFixture<SupplierPortalWorkspaceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPortalWorkspaceLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPortalWorkspaceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
