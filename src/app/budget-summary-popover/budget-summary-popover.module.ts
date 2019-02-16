import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BudgetSummaryPopoverPage } from './budget-summary-popover.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetSummaryPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BudgetSummaryPopoverPage]
})
export class BudgetSummaryPopoverPageModule {}
