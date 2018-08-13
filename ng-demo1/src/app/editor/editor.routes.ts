import {ShowEditorComponent} from './show-editor/show-editor.component';

export const editorRoutes = [

  {
    path : '',
    ShowEditorComponent,
    children : [

      {
        path : '',
        redirectTo : 'showEditor',
        pathMatch : 'full'
      },

      {
        path : 'showEditor',
        component : ShowEditorComponent
      },

      {
        path : '**',
        component : ShowEditorComponent
      },
    ]
  },

];
