import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {SysUser} from "../model/sysUser";

@Injectable()
export class ChartsService {

  constructor(public http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http
      .get('http://localhost:8080/api/charts')
      .map(data => data)
      .catch((error: any) => {
        return Observable.throw(error || 'Server error');
      });
  }
}
