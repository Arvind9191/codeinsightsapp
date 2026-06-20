import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bodycontent } from './bodycontent';

describe('Bodycontent', () => {
  let component: Bodycontent;
  let fixture: ComponentFixture<Bodycontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodycontent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bodycontent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
