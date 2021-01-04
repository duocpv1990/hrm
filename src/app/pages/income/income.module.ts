import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IncomePageComponent } from './containers/income-page/income-page.component';
import { IncomeRoutingModule } from './income-routing.module';

@NgModule({
  declarations: [IncomePageComponent],
  imports: [CommonModule, IncomeRoutingModule, SharedModule],
  providers: [
    // IncomeService
  ],
})
export class IncomeModule {}
