import {HomeComponent} from "./home/home.component";
import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './common/guard/login.guard';
import {ShowChartsModule} from './show-charts/show-charts.module';

export const appRoutes :Routes = [

  // {
  //   path : '',
  //   redirectTo : 'home',
  //   pathMatch : 'full'
  // },

  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },

  {
    path : 'login',
    component : LoginComponent,
    canDeactivate : [LoginGuard]
  },

  {
    path : 'home',
    component : HomeComponent
  },

  {
    path : 'myBoard',
    loadChildren : './my-board/my-board.module#MyBoardModule'
  },



  {
    path : 'charts',
    loadChildren : './show-charts/show-charts.module#ShowChartsModule'
  },

  {
    path : '**',
    component : HomeComponent
  },

];
