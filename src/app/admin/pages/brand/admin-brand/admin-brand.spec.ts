import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrand } from './admin-brand';

describe('AdminBrand', () => {
  let component: AdminBrand;
  let fixture: ComponentFixture<AdminBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBrand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
