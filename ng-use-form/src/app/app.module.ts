import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NormalModelFormComponent } from './normal-model-form/normal-model-form.component';
import { ResponseFormComponent } from './response-form/response-form.component';
import { AutoFormsComponent } from './auto-forms/auto-forms.component';
import { AutoFormControlComponent } from './auto-form-control/auto-form-control.component';
@NgModule({
  declarations: [
    AppComponent,
    NormalModelFormComponent,
    ResponseFormComponent,
    AutoFormsComponent,
    AutoFormControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
