import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactUs } from './admin-contact-us';

describe('AdminContactUs', () => {
  let component: AdminContactUs;
  let fixture: ComponentFixture<AdminContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminContactUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContactUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
