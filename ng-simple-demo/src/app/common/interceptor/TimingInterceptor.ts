import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
export class TimingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req)
      .do(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          // console.log("progress event", event);
          // console.log("progress event", event);
          // console.log("response received...", event.body);
          console.log(`发送请求: [${req.urlWithParams}] ,花费 : [${elapsed}] ms.`);
        }
      });
  }
}
