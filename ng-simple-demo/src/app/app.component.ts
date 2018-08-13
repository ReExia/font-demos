import {Component, OnInit} from '@angular/core';
import {headerMenuItems, HeadItem} from "./common/model/headItem";
import {LoginUser} from './common/model/LoginUser';
import {LoginService} from './common/service/login.service';
import 'rxjs/add/operator/merge';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
// import { NgXCookies } from 'ngx-cookies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  currentUser : LoginUser;

  headers =  headerMenuItems;

  selectHeader : HeadItem;

  siderMenus : any;

  constructor(
    public loginService : LoginService,
    public router : Router,
    private cookieService : CookieService
  ){
    // console.log("data", headerMenuItems)

  }

  ngOnInit(): void {
    this.select( headerMenuItems[0]);

    // this.currentUser = JSON.parse(localStorage.getItem("currentUser")) as LoginUser;
    // this.currentUser = JSON.parse(sessionStorage.getItem("currentUser")) as LoginUser;
    // this.currentUser = JSON.parse(NgXCookies.getCookie("currentUser")) as LoginUser;
    //  this.currentUser =  JSON.parse(this.cookieService.get("currentUser")) as LoginUser;
    // console.log(this.cookieService.get("currentUser"));
    // this.currentUser = JSON.parse(this.cookieService.get("currentUser")) as LoginUser;
    // console.log(this.currentUser);
    // console.log(this.cookieService.get("currentUser") == "");
    if (this.cookieService.get("currentUser") != ""){
      this.currentUser = JSON.parse(this.cookieService.get("currentUser")) as LoginUser;
    }
    // (data) => {
    //   console.log("app component Init currentUser",data);
    //   this.currentUser = data as LoginUser;
    // }
    this.loginService.getCurrentUser().merge(this.loginService.getCurrentUser()).subscribe(
      (data) => {
        this.currentUser = data;

        // console.log("login User data",data)
        //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
        // if (routerStateSnapshot.url.indexOf("/login") != -1) {
        //   this.router.navigateByUrl("/home");
        // }
      },
      error => console.error(error)
    )

  }

  select(header : HeadItem) {
    //将所有的Actuve状态的清空
    this.headers.forEach((header) => {
      header.isActive = false;
    });
    //选中的菜单项
    this.selectHeader = header;
    header.isActive = true;
    this.siderMenus = this.selectHeader.siderMenu;
  }

  public doLogout(){
    //currentUser最好加一个字段 status : online , outLine
    this.loginService.logout();
    // this.currentUser = null;
    // NgXCookies.deleteCookie("currentUser");
    this.cookieService.delete("currentUser", JSON.stringify(this.currentUser));
    this.currentUser = null;
  }

}
