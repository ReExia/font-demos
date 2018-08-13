import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  sendUrl  = "http://localhost:8080/user/send";

  getUrl = "http://localhost:8080/user/get";

  constructor(private http : HttpClient) { }

  /**
   * 设置数据
   */
  onSet() : void{
    this.http.get(this.sendUrl,{
      withCredentials : true
    }).subscribe(
      (data) => {
        console.log("auth sendUrl response data:", data);
      },
      (error) => {
        return Observable.throw(error || "server error");
      }
    )
  }

  /**
   * 获取数据
   */
  onGet() : void {
    this.http.get(this.getUrl,{
      withCredentials : true
    }).subscribe(
      data => {
        console.log("auth getUrl response data :",data)
      },
      (error) => {
        return Observable.throw(error || "server error");
      }
    )
  }

}
