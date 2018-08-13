import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../service/user.service';
import {UserFormGuard} from '../guard/user-form.guard';
import {UserAuthGuardGuard} from '../guard/user-auth-guard.guard';
import {AuthGuard} from '../guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserDetailComponent,
    UserFormComponent,
    UserListComponent
  ],
  providers: [
    UserService,
    UserFormGuard,
    UserAuthGuardGuard,
    AuthGuard,
  ]
})
export class UserModule {
}
