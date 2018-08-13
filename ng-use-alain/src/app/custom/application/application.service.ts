import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {_HttpClient} from '@delon/theme';

@Injectable()
export class ApplicationService {

  deleteUrl = 'http://localhost:8080/api/app/delete/';

  deleteApp(id: string) {
      return this.http
          .delete(this.deleteUrl + id)
          .pipe(catchError(this.handleError));
  }


  handleError(error: any) {
      const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

  constructor(private http: _HttpClient) {
  }

}
