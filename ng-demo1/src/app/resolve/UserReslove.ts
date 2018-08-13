import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {SysUser} from '../model/sysUser';
import {Observable} from 'rxjs/Observable';
import {UserServiceService} from '../service/user-service.service';


export class UserReslove implements Resolve<SysUser>{


  constructor(private router:Router,private userService : UserServiceService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SysUser> | Promise<SysUser> | SysUser {

    // this.userService.getUserById()
    //todo
    return undefined;
  }



}
