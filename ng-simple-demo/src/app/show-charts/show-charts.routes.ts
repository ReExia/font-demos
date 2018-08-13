import {Routes} from '@angular/router';
import {Show1Component} from './show1/show1.component';

export const showChartsRoutes : Routes = [

  {
    path : '',
    children : [
      {
        path : 'show',
        component : Show1Component
      }
    ]
  }


];
