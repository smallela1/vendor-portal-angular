import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPortalFooterComponent } from './supplier-portal-footer.component';

describe('SupplierPortalFooterComponent', () => {
  let component: SupplierPortalFooterComponent;
  let fixture: ComponentFixture<SupplierPortalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPortalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
