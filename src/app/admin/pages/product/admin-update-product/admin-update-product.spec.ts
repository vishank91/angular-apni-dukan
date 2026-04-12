import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateProduct } from './admin-update-product';

describe('AdminUpdateProduct', () => {
  let component: AdminUpdateProduct;
  let fixture: ComponentFixture<AdminUpdateProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
