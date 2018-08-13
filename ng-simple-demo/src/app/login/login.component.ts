import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../common/model/LoginUser';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUser : LoginUser;

  constructor(
    public router : Router,
    public activatedRoute : ActivatedRoute,
    public loginService : LoginService
  ) { }

  ngOnInit() {
    // console.log("--- user-login-component ---");
    // console.log(this.router);
    // console.log(this.activatedRoute);
    //
    // let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
    // let routerState: RouterState = this.router.routerState;
    // let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
    //
    // console.log(activatedRouteSnapshot);
    // console.log(routerState);
    // console.log(routerStateSnapshot);
  }

  public doLogin(submitUser : any) : void {

      this.loginService.login(submitUser).subscribe(
        (data) => {
          console.log("login Component doLogin");
          if (data.token){
            this.router.navigateByUrl("['home']");
          }else {
            this.router.navigateByUrl("['login']");
          }
        }
      );
  }

  public doLogout() : void{
    this.loginService.logout();
    console.log("注销成功");
  }

  //todo forgetPwd

}
