import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {SysUser} from "../model/sysUser";

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUserList(): Observable<any> {
    return this.http
      .get('http://localhost:8080/api/list')
      .map(data => data)
      .catch((error: any) => {
        return Observable.throw(error || 'Server error');
      });
  }

  getUserById(userId: string): Observable<any> {
    return this.http
      .get('http://localhost:8080/api/getUserById/'+userId)
      .map(data => data)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteUserById(id: string): Observable<any> {
    return this.http
      .delete('http://localhost:8080/api/deleteById/' + id)
      .map(data => data)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  saveUser(sysUser: SysUser): Observable<any> {
    return this.http
      .post('http://localhost:8080/api/save', sysUser)
      .map(data => data)
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(error || 'Server error');
      });
  }
}
