import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAndDiscount } from './offer-and-discount';

describe('OfferAndDiscount', () => {
  let component: OfferAndDiscount;
  let fixture: ComponentFixture<OfferAndDiscount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferAndDiscount],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferAndDiscount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
