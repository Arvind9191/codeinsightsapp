import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editproject } from './editproject';

describe('Editproject', () => {
  let component: Editproject;
  let fixture: ComponentFixture<Editproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Editproject],
    }).compileComponents();

    fixture = TestBed.createComponent(Editproject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
