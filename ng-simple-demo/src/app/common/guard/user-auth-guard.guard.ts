import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class UserAuthGuardGuard implements CanActivate {
  canActivate() {
    console.log('UserAuthGuardGuard called ....');
    return true;
  }
}
