import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-expenditure-popover',
  templateUrl: './add-expenditure-popover.page.html',
  styleUrls: ['./add-expenditure-popover.page.scss'],
})
export class AddExpenditurePopoverPage implements OnInit {
  expenditure: number = 2.00;

  constructor() { }

  ngOnInit() {

  }

}
