import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateSubcategory } from './admin-update-subcategory';

describe('AdminUpdateSubcategory', () => {
  let component: AdminUpdateSubcategory;
  let fixture: ComponentFixture<AdminUpdateSubcategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateSubcategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateSubcategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
