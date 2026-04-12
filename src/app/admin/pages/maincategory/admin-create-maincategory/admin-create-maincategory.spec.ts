import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateMaincategory } from './admin-create-maincategory';

describe('AdminCreateMaincategory', () => {
  let component: AdminCreateMaincategory;
  let fixture: ComponentFixture<AdminCreateMaincategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateMaincategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateMaincategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
