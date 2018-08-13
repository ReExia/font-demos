import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SysUser} from '../../model/sysUser';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  tableHeaders: string[] = [
    '编号',
    '姓名',
    '电话',
    '邮件',
    '所属部门',
    '备注',
    '操作'
  ];

  users: SysUser[];

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUserList();
  }

  /**
   * 跳转到创建用户界面
   */
  create() {
    this.router.navigate(['user/userForm', -1]);
  }

  /**
   * 跳转到删除用户界面
   * @param {SysUser} user
   */
  delete(user: SysUser) {
    this.userService
      .deleteUserById(user.id + '')
      .subscribe(
        (data) => {
          console.log(data);
          if (data.status === "1"){
            this.users = this.users.filter(u => u.id !== user.id);
          }
        },
        (error) => {
              console.log(error);
        }
      );
  }

  /**
   * 修改用户
   * @param {SysUser} user
   */
  edit(user: SysUser) {
    this.router.navigate(['user/userForm', user.id]);
  }

  /**
   * 取到用户列表
   */
  getUserList() {
    this.userService.getUserList().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

}
