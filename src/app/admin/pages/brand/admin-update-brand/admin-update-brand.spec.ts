import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateBrand } from './admin-update-brand';

describe('AdminUpdateBrand', () => {
  let component: AdminUpdateBrand;
  let fixture: ComponentFixture<AdminUpdateBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateBrand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
