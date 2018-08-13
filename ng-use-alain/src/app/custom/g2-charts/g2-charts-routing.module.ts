import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ggcharts1Component } from './ggcharts1/ggcharts1.component';
import {UseGchartsComponent} from "./use-gcharts/use-gcharts.component";

const routes: Routes = [

  {
    path : 'useGCharts',
    component : UseGchartsComponent
  },

  {
    path : '**',
    component : UseGchartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2ChartsRoutingModule { }
