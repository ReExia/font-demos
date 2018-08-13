import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateLangComponent } from './template-lang/template-lang.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { ValueBindComponent } from './value-bind/value-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { EachBindComponent } from './each-bind/each-bind.component';
import { FontChangeComponent } from './each-bind/font-change/font-change.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { UseNgForComponent } from './use-ng-for/use-ng-for.component';
import { UseNgSwitchComponent } from './use-ng-switch/use-ng-switch.component';
import { UseNgClassComponent } from './use-ng-class/use-ng-class.component';
import { UsePipeComponent } from './use-pipe/use-pipe.component';
import { TestPipePipe } from './utils/test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateLangComponent,
    TemplateRefComponent,
    ValueBindComponent,
    EventBindComponent,
    EachBindComponent,
    FontChangeComponent,
    NgIfComponent,
    UseNgForComponent,
    UseNgSwitchComponent,
    UseNgClassComponent,
    UsePipeComponent,
    TestPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
