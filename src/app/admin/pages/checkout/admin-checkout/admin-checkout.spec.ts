import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckout } from './admin-checkout';

describe('AdminCheckout', () => {
  let component: AdminCheckout;
  let fixture: ComponentFixture<AdminCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCheckout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCheckout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
