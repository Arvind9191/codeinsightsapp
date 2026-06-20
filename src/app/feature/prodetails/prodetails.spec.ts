import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodetails } from './prodetails';

describe('Prodetails', () => {
  let component: Prodetails;
  let fixture: ComponentFixture<Prodetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Prodetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
