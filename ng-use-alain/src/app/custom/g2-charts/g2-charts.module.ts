import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G2ChartsRoutingModule } from './g2-charts-routing.module';
import { Ggcharts1Component } from './ggcharts1/ggcharts1.component';
import { SharedModule } from '../../shared/shared.module';
import { UseGchartsComponent } from './use-gcharts/use-gcharts.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    G2ChartsRoutingModule
  ],
  declarations: [Ggcharts1Component, UseGchartsComponent]
})
export class G2ChartsModule { }
