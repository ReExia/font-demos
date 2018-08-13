import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {LoginUser} from '../model/LoginUser';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {CookieService} from 'ngx-cookie-service';
// import { NgXCookies } from 'ngx-cookies';
/**
 * 1.将用户信息放入localStorage
 * 2.从localStorage清除用户信息
 */
@Injectable()
export class LoginService{
  public loginUrl = "http://localhost:8080/user/login";
  public subject : Subject<LoginUser> = new Subject<LoginUser>();

  public getCurrentUser() : Observable<LoginUser> {
    return this.subject.asObservable();
  }

  constructor(private http : HttpClient,
              private cookieService: CookieService
  ){}
  //
  // let loginMap = JSON.stringify(data)
  // localStorage.setItem("loginMap", loginMap);
  // this.subject.next(Object.assign({},loginMap));
  // return data;
  public login(submitUser : LoginUser) : Observable<any>{
    return this.http
      .get(this.loginUrl)
      .map((data: any) => {
        let user = data.userMap as LoginUser;

        if (user && user.token){
          // localStorage.setItem("currentUser", JSON.stringify(user));
          // sessionStorage.setItem("currentUser", JSON.stringify(user));
          // NgXCookies.setCookie("currentUser", JSON.stringify(user));
          this.cookieService.set("currentUser", JSON.stringify(user));
          //clone Object
          this.subject.next(Object.assign({},user));
        }

        return data.userMap;
      }).catch(
        (error) => {
          return Observable.throw(error || 'server error');
        }
      )
  }

  public logout() : void{
    // localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }


}
