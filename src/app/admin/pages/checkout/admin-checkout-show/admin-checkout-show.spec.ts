import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckoutShow } from './admin-checkout-show';

describe('AdminCheckoutShow', () => {
  let component: AdminCheckoutShow;
  let fixture: ComponentFixture<AdminCheckoutShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCheckoutShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCheckoutShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
