import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTablesComponent } from './lookup-tables.component';

describe('LookupTablesComponent', () => {
  let component: LookupTablesComponent;
  let fixture: ComponentFixture<LookupTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
