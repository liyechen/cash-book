import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BudgetSummaryPopoverPage } from '../budget-summary-popover/budget-summary-popover.page'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  balance: number = 0;

  constructor(
    public popoverController: PopoverController
  ) {
    
  }

  ngOnInit() {

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: BudgetSummaryPopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
