import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router';
import {UserFormComponent} from '../user/user-form/user-form.component';

@Injectable()
export class UserFormGuard implements CanDeactivate<any>{
  canDeactivate(){
    return window.confirm("确定不保存吗？");
  }
}
