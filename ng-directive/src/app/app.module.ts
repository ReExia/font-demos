import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { ShowViewComponent } from './show-view/show-view.component';
import { CardComponent } from './card/card.component';
import { DelayDirective } from './directive/delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    MyDirectiveDirective,
    ShowViewComponent,
    CardComponent,
    DelayDirective,
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
