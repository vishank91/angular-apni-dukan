import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactUsShow } from './admin-contact-us-show';

describe('AdminContactUsShow', () => {
  let component: AdminContactUsShow;
  let fixture: ComponentFixture<AdminContactUsShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminContactUsShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContactUsShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
