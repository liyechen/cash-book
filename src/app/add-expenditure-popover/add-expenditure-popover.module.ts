import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddExpenditurePopoverPage } from './add-expenditure-popover.page';

const routes: Routes = [
  {
    path: '',
    component: AddExpenditurePopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddExpenditurePopoverPage]
})
export class AddExpenditurePopoverPageModule {}
