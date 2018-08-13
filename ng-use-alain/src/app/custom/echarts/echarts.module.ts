import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule, NgxEchartsService } from 'ngx-echarts';
import { EchartsRoutingModule } from './echarts-routing.module';
import { Echart1Component } from './echart1/echart1.component';
import { UseEchartsComponent } from './use-echarts/use-echarts.component';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { InstanceComponent } from './instance/instance.component';
import { EventsComponent } from './events/events.component';
import { ThemeComponent } from './theme/theme.component';
import { providers } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    SharedModule,
    EchartsRoutingModule
  ],
  declarations: [Echart1Component, UseEchartsComponent, BasicComponent, InstanceComponent, EventsComponent, ThemeComponent],
  providers : [NgxEchartsService]
})
export class EchartsModule { }
