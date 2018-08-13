import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ParentTemplateComponent } from './parent-template/parent-template.component';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { ChildThirdComponent } from './child-third/child-third.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    ParentTemplateComponent,
    ChildFirstComponent,
    ChildSecondComponent,
    ChildThirdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
