import { AppComponent } from './app.comopnent';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { DataService } from './data.service';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(DataService),
        AppRoutingModule
    ],
    declarations:[
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroesComponent
    ],
    providers:[HeroService],
    bootstrap:[AppComponent]
})

export class AppModule{};