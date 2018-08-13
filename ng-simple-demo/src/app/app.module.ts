import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './common/service/login.service';
import { CookieService } from 'ngx-cookie-service';
import {TimingInterceptor} from './common/interceptor/TimingInterceptor';
import {NoopInterceptor} from '@angular/common/http/src/interceptor';
import {LoginGuard} from './common/guard/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    },
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
