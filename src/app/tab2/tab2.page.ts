import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BudgetSummaryPopoverPage } from '../budget-summary-popover/budget-summary-popover.page'
import { AddExpenditurePopoverPage } from '../add-expenditure-popover/add-expenditure-popover.page'
import { Expenditure, DailyExpenditure } from '../models/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  balance: number = 0;
  // TODO: read from db
  expenditureList: Expenditure[] = [];
  dailyExpendList: DailyExpenditure[] = [];
  date: string = new Date().toISOString();

  constructor(
    public popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
    this.formatExpendListByDate();
    const list = this.dailyExpendList;
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
      if (data) {
        this.expenditureList.push(data.data);
        this.formatExpendListByDate();
      }
    });
  }

  formatExpendListByDate() {
    this.dailyExpendList = [];
    const dateSet = new Set();
    for (const expenditure of this.expenditureList) {
      const expendDate = new Date(expenditure.date)
      const year = expendDate.getFullYear();
      const month = expendDate.getMonth() + 1;
      const day = expendDate.getDate();
      const dateStr = `${year}-${month}-${day}`
      if (dateSet.has(dateStr)) {
        for (const dailyExpend of this.dailyExpendList) {
          if (dailyExpend) {
            dailyExpend.expendList.push(expenditure);
            break;
          }
        }
      } else {
        this.dailyExpendList.push({
          date: dateStr,
          expendList: [expenditure],
        })
        dateSet.add(dateStr);
      }
    }
    }
}
