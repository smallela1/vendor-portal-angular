import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorResourcesComponent } from './vendor-resources.component';

describe('VendorResourcesComponent', () => {
  let component: VendorResourcesComponent;
  let fixture: ComponentFixture<VendorResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
