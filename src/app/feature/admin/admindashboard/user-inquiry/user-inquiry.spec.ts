import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInquiry } from './user-inquiry';

describe('UserInquiry', () => {
  let component: UserInquiry;
  let fixture: ComponentFixture<UserInquiry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInquiry],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInquiry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
