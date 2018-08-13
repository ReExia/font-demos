import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBoardComponent } from './data-board/data-board.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import {RouterModule} from "@angular/router";
import {myBoardRoutes} from "./my-board.routes";
import {BoardVoService} from "../common/service/boardVoService";
import { EditBoardComponent } from './edit-board/edit-board.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BoardReslove} from '../common/resolve/boardReslove';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    RouterModule.forChild(myBoardRoutes)
  ],
  declarations: [DataBoardComponent, PersonInfoComponent, FileManagerComponent, EditBoardComponent],
  providers : [BoardVoService,BoardReslove]
})
export class MyBoardModule { }
