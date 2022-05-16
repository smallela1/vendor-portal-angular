import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPortalFooterComponent } from './vendor-portal-footer.component';

describe('VendorPortalFooterComponent', () => {
  let component: VendorPortalFooterComponent;
  let fixture: ComponentFixture<VendorPortalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPortalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
