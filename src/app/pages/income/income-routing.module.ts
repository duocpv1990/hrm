import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IncomePageComponent } from './containers/income-page/income-page.component';
const routes: Routes = [
  {
    path: '',
    component: IncomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeRoutingModule {}
