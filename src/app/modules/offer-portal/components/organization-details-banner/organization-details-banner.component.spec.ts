import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailsBannerComponent } from './organization-details-banner.component';

describe('OrganizationDetailsBannerComponent', () => {
  let component: OrganizationDetailsBannerComponent;
  let fixture: ComponentFixture<OrganizationDetailsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationDetailsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
