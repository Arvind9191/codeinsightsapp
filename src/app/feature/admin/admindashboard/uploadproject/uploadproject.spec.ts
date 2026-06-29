import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadproject } from './uploadproject';

describe('Uploadproject', () => {
  let component: Uploadproject;
  let fixture: ComponentFixture<Uploadproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Uploadproject],
    }).compileComponents();

    fixture = TestBed.createComponent(Uploadproject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
