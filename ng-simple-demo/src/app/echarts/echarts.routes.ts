import {Charts1Component} from './charts-1/charts-1.component';
import {Charts2Component} from './charts2/charts2.component';
import {Charts3Component} from './charts3/charts3.component';
import {Charts4Component} from './charts4/charts4.component';
import {Charts5Component} from './charts5/charts5.component';
import {Charts6Component} from './charts6/charts6.component';
import {Charts7Component} from './charts7/charts7.component';
import {Charts8Component} from './charts8/charts8.component';

export const echartsRoutes = [

  {
    path : '',
    Charts1Component,
    children : [

      {
        path : '',
        redirectTo : 'charts1',
        pathMatch : 'full'
      },

      {
        path : 'charts1',
        component : Charts1Component
      },

      {
        path : 'charts2',
        component : Charts2Component
      },

      {
        path : 'charts3',
        component : Charts3Component
      },

      {
        path : 'charts4',
        component : Charts4Component
      },

      {
        path : 'charts5',
        component : Charts5Component
      },

      {
        path : 'charts6',
        component : Charts6Component
      },

      {
        path : 'charts7',
        component : Charts7Component
      },

      {
        path : 'charts8',
        component : Charts8Component
      },

      {
        path : '**',
        component : Charts1Component
      },
    ]
  },

];
