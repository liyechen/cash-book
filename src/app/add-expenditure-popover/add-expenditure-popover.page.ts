import { Component, OnInit } from '@angular/core';

interface Expenditure {
  expenditureNumber: number
  expenditureType: string
}

@Component({
  selector: 'app-add-expenditure-popover',
  templateUrl: './add-expenditure-popover.page.html',
  styleUrls: ['./add-expenditure-popover.page.scss'],
})

export class AddExpenditurePopoverPage implements OnInit {
  newExpenditure: Expenditure = {
    expenditureNumber: 100,
    expenditureType: '餐饮'
  }

  expenditureTypeList: string[] = ['餐饮', '购物', '社交', '房租'];
  expenditureList: Expenditure[] = [];

  constructor() { }

  ngOnInit() {

  }

  addExpenditure () {
    this.expenditureList.push(this.newExpenditure);
  }

}
