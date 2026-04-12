import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateFaq } from './admin-update-faq';

describe('AdminUpdateFaq', () => {
  let component: AdminUpdateFaq;
  let fixture: ComponentFixture<AdminUpdateFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateFaq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
