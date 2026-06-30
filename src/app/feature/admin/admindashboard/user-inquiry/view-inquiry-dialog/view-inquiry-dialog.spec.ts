import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInquiryDialog } from './view-inquiry-dialog';

describe('ViewInquiryDialog', () => {
  let component: ViewInquiryDialog;
  let fixture: ComponentFixture<ViewInquiryDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewInquiryDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInquiryDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
