import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseEchartsComponent } from './use-echarts/use-echarts.component';

const routes: Routes = [

  {
    path : 'useEcharts',
    component : UseEchartsComponent
  },

  {
    path : '**',
    component : UseEchartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsRoutingModule { }
