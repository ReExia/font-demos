import {EchartsModule} from './echarts/echarts.module';
import {EditorModule} from './editor/editor.module';

export const appRoutes = [

  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },

  {
    path : 'home',
    loadChildren : './index/home/home.module#HomeModule'
  },

  {
    path:'user',
    loadChildren:'./user/user.module#UserModule'
  },

  {
    path : 'echarts',
    loadChildren : './echarts/echarts.module#EchartsModule'
  },

  {
    path : 'editor',
    loadChildren : './editor/editor.module#EditorModule'
  },

  {
    path : 'file',
    loadChildren : './file/file.module#FileModule'
  },

  {
    path : '**',
    loadChildren : './index/home/home.module#HomeModule'
  }

];
