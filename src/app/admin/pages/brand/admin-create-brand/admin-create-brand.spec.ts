import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateBrand } from './admin-create-brand';

describe('AdminCreateBrand', () => {
  let component: AdminCreateBrand;
  let fixture: ComponentFixture<AdminCreateBrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateBrand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateBrand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
