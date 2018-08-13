import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { ShawdowDomComponent } from './shawdow-dom/shawdow-dom.component';
import { EmulateModeComponent } from './emulate-mode/emulate-mode.component';
import { NoneModeComponent } from './none-mode/none-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    ChildComponent,
    ShawdowDomComponent,
    EmulateModeComponent,
    NoneModeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule   
  ],
  providers: [],
  entryComponents:[ChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
