///<reference path="../../../node_modules/@angular/router/src/config.d.ts"/>
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {Route, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Injectable()
export class NoopInterceptor implements  HttpInterceptor{

  private router : Router;
  private authService : AuthService;
  constructor(router : Router,authService : AuthService){
    this.router = router;
    this.authService = authService;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // next总是代表位于拦截器链中的下一个拦截器
    // 这种工作模式类似于一些框架（如Express.js）中的中间件。
    // 当我们在一个应用中提供了多个拦截器时，
    // Angular 会按照你提供时的顺序应用它们（译注：即模块的providers数组中列出的顺序）。
    // 由于请求都是不可变的，所以不能直接修改它们。要想修改，就使用clone()函数：
    let dupReq = req.clone();
    // console.log(dupReq);
    // const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
    // this.userService = this.injector.get(UserService);
    // this.userService.getUserById("2014131033");
    console.log("NoopInterceptor running...");
    // alert("NoopInterceptor running...");
    // this.router.navigate(['home']);
    let data = this.authService.doCheck();
    return next.handle(req);
  }

}
