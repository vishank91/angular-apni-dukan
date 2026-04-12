import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateFeature } from './admin-create-feature';

describe('AdminCreateFeature', () => {
  let component: AdminCreateFeature;
  let fixture: ComponentFixture<AdminCreateFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
