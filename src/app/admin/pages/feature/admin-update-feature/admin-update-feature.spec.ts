import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateFeature } from './admin-update-feature';

describe('AdminUpdateFeature', () => {
  let component: AdminUpdateFeature;
  let fixture: ComponentFixture<AdminUpdateFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
