import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserFormGuard} from '../guard/user-form.guard';
import {UserAuthGuardGuard} from '../guard/user-auth-guard.guard';
import {AuthGuard} from '../guard/auth.guard';
export const userRoutes = [

  {
    path : '',
    UserListComponent,
    canActivate:[UserAuthGuardGuard,AuthGuard],
    children : [

      {
        path : '',
        redirectTo : 'userList',
        pathMatch : 'full'
      },

      {
        path : 'userList',
        component : UserListComponent
      },

      {
        path : 'userDetail',
        component : UserDetailComponent,
      },

      {
        path : 'userForm/:id',
        component : UserFormComponent,
        canDeactivate: [UserFormGuard]
      },

      {
        path : '**',
        component : UserListComponent
      }
    ]
  },

];
