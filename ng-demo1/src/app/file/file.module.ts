import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorFileComponent } from './valor-file/valor-file.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {fileRoutes} from './file.routes';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    RouterModule.forChild(fileRoutes)
  ],
  declarations: [ValorFileComponent]
})
export class FileModule { }
