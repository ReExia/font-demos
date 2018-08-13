import { Component } from '@angular/core';
import {ThemesService, ThemeType} from "@delon/theme";
import {MenuData} from "./data/MenuData";
import {MenuItem} from "./model/MenuItem";
import { ActiveUser } from './model/ActiveUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  menuList = MenuData as MenuItem[];
  isCollapsed = false;



  

  constructor(private themeService : ThemesService){

    this.themeService.setTheme("A");
    // console.log("menuList", this.menuList);
  }



}
