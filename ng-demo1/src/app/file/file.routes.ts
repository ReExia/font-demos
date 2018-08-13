import {ValorFileComponent} from './valor-file/valor-file.component';

export const fileRoutes = [

  {
    path : '',
    ValorFileComponent,
    children : [

      {
        path : '',
        redirectTo : 'valorFile',
        pathMatch : 'full'
      },

      {
        path : 'valorFile',
        component : ValorFileComponent
      },

      {
        path : '**',
        component : ValorFileComponent
      }
    ]
  },

];
