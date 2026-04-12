import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialPage } from './testimonial-page';

describe('TestimonialPage', () => {
  let component: TestimonialPage;
  let fixture: ComponentFixture<TestimonialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestimonialPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
