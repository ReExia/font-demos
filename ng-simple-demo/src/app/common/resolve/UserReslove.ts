import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from "../service/user.service";
import {SysUser} from "../model/sysUser";


export class UserReslove implements Resolve<SysUser>{


  constructor(private router:Router,private userService : UserService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SysUser> | Promise<SysUser> | SysUser {

    // this.userService.getUserById()
    //todo
    return undefined;
  }



}
