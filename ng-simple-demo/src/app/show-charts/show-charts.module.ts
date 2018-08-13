import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show1Component } from './show1/show1.component';
import {RouterModule} from '@angular/router';
import {NgxEchartsModule, NgxEchartsService} from 'ngx-echarts';
import {showChartsRoutes} from './show-charts.routes';
import {ChartsService} from '../common/service/charts.service';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild(showChartsRoutes)
  ],
  providers : [NgxEchartsService,ChartsService],
  declarations: [Show1Component]
})
export class ShowChartsModule { }
