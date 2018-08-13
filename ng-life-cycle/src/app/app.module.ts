import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './father/child/child.component';
import { UseNgContentComponent } from './use-ng-content/use-ng-content.component';
import { ContentChildComponent } from './use-ng-content/content-child/content-child.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    LifeCycleComponent,
    FatherComponent,
    ChildComponent,
    UseNgContentComponent,
    ContentChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
