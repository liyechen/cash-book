import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSummaryPopoverPage } from './budget-summary-popover.page';

describe('BudgetSummaryPopoverPage', () => {
  let component: BudgetSummaryPopoverPage;
  let fixture: ComponentFixture<BudgetSummaryPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetSummaryPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSummaryPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
