import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ThemesService} from "@delon/theme";
import {DelonModule} from "./shared/delon.module";
import { SiderbarComponent } from './siderbar/siderbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {SiderBarMenuItemComponent} from "./siderbar/sider-bar-menu-item/sider-bar-menu-item.component";

@NgModule({
  declarations: [
    AppComponent,
    SiderbarComponent,
    SiderBarMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DelonModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  providers: [ThemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
