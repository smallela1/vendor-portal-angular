import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPortalHeaderComponent } from './vendor-portal-header.component';

describe('VendorPortalHeaderComponent', () => {
  let component: VendorPortalHeaderComponent;
  let fixture: ComponentFixture<VendorPortalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPortalHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
