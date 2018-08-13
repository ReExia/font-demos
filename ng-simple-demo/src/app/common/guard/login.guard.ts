import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router';

@Injectable()
export class LoginGuard implements CanDeactivate<any>{
  canDeactivate(){
    return window.confirm("确定离开吗？");
  }
}
