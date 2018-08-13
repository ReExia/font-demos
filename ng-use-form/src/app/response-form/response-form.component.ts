import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {

  userForm : FormGroup;
  
  public formErrors = {
    'name': '',
    'sex':'',
    'nickName': '',
    'email': '',
    'password': '',
    'address':'',
  };

  validationsMessage = {
    'name':{
      'required':'用户名不能为空',
      'minlength':'用户名必须在8到32位',
      'maxlength':'用户名必须在8到32位'
    },
    'sex':{
      'required': '性别必选',
    },
    'nickName':{
      'required':'昵称不能为空',
      'minlength':'用户名必须在8到32位',
      'maxlength':'用户名必须在8到32位'
    },
    'email':{
      'required': '邮箱必须输入',
      'pattern': '请输入正确的邮箱地址'
    },
    'password':{
      'required':'密码长度不能小于8位',
      'minlength':'用户名必须在8到32位'
    }
    ,'address':{
      'required':'地址不能为空',
    }
  }
  

  createForm():void{
    this.userForm = this.fb.group(
      {
        //姓名
        'name':['',
            [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(32)
            ]
        ],
        //性别
        'sex':['',
            [
              Validators.required
            ]
        ],
        //昵称
        'nickName':['',
              [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(32)
              ]
        ],
        //邮箱
        'email':['',
              [
                Validators.required,
                Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
              ]
        ],
        //密码
        'password':['',
              [
                Validators.required,
                Validators.minLength(8)
              ]
        ],
        //地址
        'address':['',
              [
                Validators.required
              ]
        ]
        
      }
    )

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?:any){
      //判断进来的是不是userForm是就继续
      if(!this.userForm){
        return;
      }
      const userForm = this.userForm;
      
      for(const field in this.formErrors){

          //field的值为name,sex等字段
          this.formErrors[field] = '';
          // console.log("field",field);

          //control是从userForm得到的FormControl对象
          const control = userForm.get(field);
          // console.log("control",control);

          //检测每一个FormControl的值的变化
          if(control && control.dirty && !control.valid){

            //按照FormContrl的字段名称validationsMessage去找对应信息
            const messages = this.validationsMessage[field];
            // console.log("messages",messages)

            //control为验证时候出现的错误
            // console.log("control.errors",control.errors);
            for(const key in control.errors){
              
              this.formErrors[field] = messages[key];
              // console.log("key",key);
              // console.log("formErrors[field]",this.formErrors[field])
            }
          }
      
      }

  }
  

  onSubmit(value : any){
      console.log("------------------------------");
      console.log("表单值为：",value);
      console.log("------------------------------");
  }

  constructor(private fb : FormBuilder) {
    this.createForm();
   }
  
  ngOnInit() {
  }

}
