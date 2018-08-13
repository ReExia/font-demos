import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BoardVoService {

  getSimpleUrl = 'http://localhost:8080/api/getVo/';

  pageUrl: string = 'http://localhost:8080/api/page/';

  deleteUrl: string = 'http://localhost:8080/api/delete/';

  postUrl: string = 'http://localhost:8080/api/post';

  saveUrl: string = 'http://localhost:8080/api/save';

  constructor(public http: HttpClient) {
  }

  /**
   * 获取分页数据
   * @param pageNum
   * @returns {Observable<any>}
   */
  getPage(pageNum: any): Observable<any> {
    return this.http
      .get(this.pageUrl + pageNum)
      .map(data => data)
      .catch((error: any) => {
        return Observable.throw(error || 'server error');
      })
  }

  /**
   * 获取单个对象
   * @param id
   * @returns {Observable<any | any>}
   */
  getSimple(id: any) {
    return this.http
      .get(this.getSimpleUrl + id)
      .map(data => data)
      .catch(
        (error: any) => Observable.throw(error || 'server error')
      )
  }

  /**
   * 更新数据
   * @param data
   * @returns {Observable<any | any>}
   */
  postData(data: any) {
    return this.http
      .post(this.postUrl, data)
      .map(data => data)
      .catch(
        (error: any) => {
          return Observable.throw(error || 'server error');
        }
      )
  }

  /**
   * 删除数据
   * @param deleteNum
   * @returns {Observable<any | any>}
   */
  deleteData(deleteNum: any) {
    return this.http
      .delete(this.deleteUrl+deleteNum)
      .map(data => data)
      .catch(
        (error: any) => {
          return Observable.throw(error || 'server error');
        }
      )
  }

  /**
   * 保存数据
   * @param data
   * @returns {Observable<any | any>}
   */
  saveData(data: any) {
    return this.http
      .post(this.saveUrl, data)
      .map(data => data)
      .catch(
        (error: any) => {
          return Observable.throw(error || 'server error');
        }
      )
  }
}
