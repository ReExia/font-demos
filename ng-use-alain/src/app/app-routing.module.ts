import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },

  {
    path : 'home',
    loadChildren : './custom/home/home.module#HomeModule'
  },

  {
    path : 'application',
    loadChildren : './custom/application/application.module#ApplicationModule'
  },

  {
    path : 'g2Charts',
    loadChildren : './custom/g2-charts/g2-charts.module#G2ChartsModule'
  },

  {
    path : 'echarts',
    loadChildren : './custom/echarts/echarts.module#EchartsModule'
  },

  {
    path : '**',
    loadChildren : './custom/home/home.module#HomeModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
