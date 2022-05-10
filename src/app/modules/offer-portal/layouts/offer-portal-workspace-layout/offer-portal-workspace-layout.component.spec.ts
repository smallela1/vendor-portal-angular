import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPortalWorkspaceLayoutComponent } from './offer-portal-workspace-layout.component';

describe('OfferPortalWorkspaceLayoutComponent', () => {
  let component: OfferPortalWorkspaceLayoutComponent;
  let fixture: ComponentFixture<OfferPortalWorkspaceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPortalWorkspaceLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPortalWorkspaceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
