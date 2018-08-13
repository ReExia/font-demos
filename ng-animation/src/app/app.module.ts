import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestFlyinComponent } from './test-flyin/test-flyin.component';
import { TestBounceComponent } from './test-bounce/test-bounce.component';
import { TestClickAniComponent } from './test-click-ani/test-click-ani.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    TestFlyinComponent,
    TestBounceComponent,
    TestClickAniComponent,
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
