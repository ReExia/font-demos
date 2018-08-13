import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';

// CanActivate
// 这种类型的Guard用来控制是否允许进入当前的路径。
// CanActivateChild
// 这种类型的Guard用来控制是否允许进入当前路径的所有子路径。
// CanDeactivate
// 用来控制是否能离开当前页面进入别的路径
// CanLoad
// 用于控制一个异步加载的子模块是否允许被加载。
@Injectable()
export class AuthGuard implements  CanActivate, CanActivateChild {

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canActivateChild runing ...");
    let url: string = state.url;

    return this.checkLogin(url);
  }

  private checkLogin(url: string) {

    return true;
  }
}
