import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSubcategory } from './admin-create-subcategory';

describe('AdminCreateSubcategory', () => {
  let component: AdminCreateSubcategory;
  let fixture: ComponentFixture<AdminCreateSubcategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateSubcategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateSubcategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
