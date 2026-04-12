import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincategory } from './maincategory';

describe('Maincategory', () => {
  let component: Maincategory;
  let fixture: ComponentFixture<Maincategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Maincategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maincategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
