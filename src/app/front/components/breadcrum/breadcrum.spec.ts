import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Breadcrum } from './breadcrum';

describe('Breadcrum', () => {
  let component: Breadcrum;
  let fixture: ComponentFixture<Breadcrum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Breadcrum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Breadcrum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
