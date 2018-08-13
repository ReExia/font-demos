import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Charts1Component } from './charts-1/charts-1.component';
import {RouterModule} from '@angular/router';
import {echartsRoutes} from './echarts.routes';
import {NgxEchartsModule} from 'ngx-echarts';
import { Charts2Component } from './charts2/charts2.component';
import { Charts3Component } from './charts3/charts3.component';
import { Charts4Component } from './charts4/charts4.component';
import { Charts5Component } from './charts5/charts5.component';
import { Charts6Component } from './charts6/charts6.component';
import { Charts7Component } from './charts7/charts7.component';
import { Charts8Component } from './charts8/charts8.component';
@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    RouterModule.forChild(echartsRoutes)
  ],
  declarations: [Charts1Component, Charts2Component, Charts3Component, Charts4Component, Charts5Component, Charts6Component, Charts7Component, Charts8Component]
})
export class EchartsModule { }
