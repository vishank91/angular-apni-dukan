import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateMaincategory } from './admin-update-maincategory';

describe('AdminUpdateMaincategory', () => {
  let component: AdminUpdateMaincategory;
  let fixture: ComponentFixture<AdminUpdateMaincategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateMaincategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateMaincategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
