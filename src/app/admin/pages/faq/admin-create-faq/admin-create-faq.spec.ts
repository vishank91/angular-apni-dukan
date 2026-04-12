import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateFaq } from './admin-create-faq';

describe('AdminCreateFaq', () => {
  let component: AdminCreateFaq;
  let fixture: ComponentFixture<AdminCreateFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateFaq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
