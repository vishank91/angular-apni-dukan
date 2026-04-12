import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubcategory } from './admin-subcategory';

describe('AdminSubcategory', () => {
  let component: AdminSubcategory;
  let fixture: ComponentFixture<AdminSubcategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSubcategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubcategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
