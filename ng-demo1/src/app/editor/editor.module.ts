import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {editorRoutes} from './editor.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TinymceComponent } from './tinymce/tinymce.component';
import { ShowEditorComponent } from './show-editor/show-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(editorRoutes)
  ],
  declarations: [TinymceComponent, ShowEditorComponent]
})
export class EditorModule { }
