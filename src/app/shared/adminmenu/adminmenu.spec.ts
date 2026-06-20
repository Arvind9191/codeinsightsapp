import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminmenu } from './adminmenu';

describe('Adminmenu', () => {
  let component: Adminmenu;
  let fixture: ComponentFixture<Adminmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminmenu],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
