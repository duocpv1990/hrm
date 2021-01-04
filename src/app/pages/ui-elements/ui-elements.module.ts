import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/shared.module';
import {
  DashedLineChartComponent,
  HeatmapChartComponent,
  IconsPageComponent,
  LineChartComponent,
  PieChartComponent
} from './components';
import {
  ChartsPageComponent
} from './containers';
import { ChartsService } from './services';
import { UiElementsRoutingModule } from './ui-elements-routing.module';


@NgModule({
  declarations: [
    IconsPageComponent,
    ChartsPageComponent,
    LineChartComponent,
    DashedLineChartComponent,
    PieChartComponent,
    HeatmapChartComponent
  ],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    NgApexchartsModule,
    MatToolbarModule,
    SharedModule,
  ],
  providers: [
    ChartsService
  ]
})
export class UiElementsModule { }
