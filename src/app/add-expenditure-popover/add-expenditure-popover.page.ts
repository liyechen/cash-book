import { Component, OnInit } from '@angular/core';
import { Expenditure } from '../models/interfaces';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-expenditure-popover',
  templateUrl: './add-expenditure-popover.page.html',
  styleUrls: ['./add-expenditure-popover.page.scss'],
})

export class AddExpenditurePopoverPage implements OnInit {
  expenditureList: Expenditure[];
  currentDate: string = new Date().toISOString();

  newExpenditure: Expenditure = {
    expenditureNumber: 100,
    expenditureType: '餐饮',
    date: this.currentDate
  }

  expenditureTypeList: string[] = ['餐饮', '购物', '社交', '房租'];

  constructor(
    private popoverController: PopoverController
    ) {

   }

  ngOnInit() {
  }

  addExpenditure () {
    this.dismiss(this.newExpenditure);
  }

  dismiss (expenditure) {
    this.popoverController.dismiss(expenditure);
  }

  dateSelected (date) {
    this.newExpenditure.date = date.detail.value;
  }

}
