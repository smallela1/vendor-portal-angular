import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPortalMainLayoutComponent } from './vendor-portal-main-layout.component';

describe('VendorPortalMainLayoutComponent', () => {
  let component: VendorPortalMainLayoutComponent;
  let fixture: ComponentFixture<VendorPortalMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPortalMainLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPortalMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
