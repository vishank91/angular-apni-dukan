import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeature } from './admin-feature';

describe('AdminFeature', () => {
  let component: AdminFeature;
  let fixture: ComponentFixture<AdminFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
