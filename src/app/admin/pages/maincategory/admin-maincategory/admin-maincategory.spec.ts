import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaincategory } from './admin-maincategory';

describe('AdminMaincategory', () => {
  let component: AdminMaincategory;
  let fixture: ComponentFixture<AdminMaincategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMaincategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMaincategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
