import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {SysUser} from '../../model/sysUser';
import {flyIn} from '../../animate/flyIn';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  animations: [flyIn]
})
export class UserFormComponent implements OnInit {

  leaved : boolean = false;

  user: SysUser = new SysUser();
  id: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }


  ngOnInit() {
    //+号是为了把string 转为 number
    //1.从url取到id
    this.id = +this.activatedRoute.snapshot.params['id'];
    //2.判断id， id = -1新增 id = 1 修改
    if (this.id !== -1) {
      //2.1 id != -1 修改,从数据库拉取用户信息
      this.userService.getUserById(this.id + '').subscribe(
        (data) => {
          //2.1.1将用户赋值给组件
          this.user = data as SysUser;
        },
        //2.2.1 打印异常信息
        (err) => {
          console.log('err', err);
        }
      );
    }
  }


  /**
   * 回退到上一个页面
   */
  goBack() {
    this.router.navigate(['user']);
  }

  /**
   * 保存用户
   */
  save() {

    //1.将用户信息提交到后台
    this.userService.saveUser(this.user).subscribe(
      //1.2返回成功,打印数据
      (data) => {
        console.log('data', data);
      },
      //1.3返回失败,打印数据
      (err) => {
        console.log('err', err);
      }
    );
  }


}
