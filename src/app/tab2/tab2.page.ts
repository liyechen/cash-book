import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BudgetSummaryPopoverPage } from '../budget-summary-popover/budget-summary-popover.page'
import { AddExpenditurePopoverPage } from '../add-expenditure-popover/add-expenditure-popover.page'
import { Expenditure } from '../models/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  balance: number = 0;
  // TODO: read from db
  expenditureList: Expenditure[] = [];

  constructor(
    public popoverController: PopoverController,
  ) {
  }

  ngOnInit() {

  }

  async presentBudgetSummaryPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: BudgetSummaryPopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async presentAddExpenditurePopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddExpenditurePopoverPage,
      event: ev,
      translucent: true
    });
    await popover.present();

    await popover.onDidDismiss().then((data) => {
      this.expenditureList.push(data.data);
    });
  }

}
