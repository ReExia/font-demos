import {DataBoardComponent} from "./data-board/data-board.component";
import {FileManagerComponent} from "./file-manager/file-manager.component";
import {PersonInfoComponent} from "./person-info/person-info.component";
import {EditBoardComponent} from "./edit-board/edit-board.component";
import {Routes} from '@angular/router';
import {BoardReslove} from '../common/resolve/boardReslove';

export const myBoardRoutes : Routes = [

  {
    path : '',
    children : [

      {
        path : 'dataBoard',
        component : DataBoardComponent
      },

      {
        path : 'fileManager',
        component : FileManagerComponent
      },

      {
        path : 'personInfo',
        component : PersonInfoComponent
      },

      {
        path : 'edit/:id',
        component : EditBoardComponent,
        resolve : {
          resoloveData : BoardReslove
        }
      }
    ]
  }


];
