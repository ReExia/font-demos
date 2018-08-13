import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormFieldBase } from '../moel/form-field-base';
import { FormImage } from '../moel/form-image';
import { FormTextBox } from '../moel/form-textbox';
import { FormTextArea } from '../moel/form-textarea';
import { FormGroup ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-auto-forms',
  templateUrl: './auto-forms.component.html',
  styleUrls: ['./auto-forms.component.css']
})
export class AutoFormsComponent implements OnInit {
  

    @Input()
   fields : FormFieldBase<any>[] = [
    new FormImage({
      src:'',
      key:'headerPic'
    }),
    new FormTextBox({
      label:"头像:",
      placeholder:"上传头像",
      type:"file",
      key:'headerImageUrl'
    }),
    new FormTextBox({
      label:"用户名:",
      placeholder:"用户名",
      key:'usernmae'
    }),
    new FormTextBox({
      label:"常用邮箱:",
      placeholder:"常用邮箱",
      key:'email'
    }),
    new FormTextBox({
      label:"重复密码:",
      type:"password",
      placeholder:"密码，至少8位",
      key:'password'
    }),
    new FormTextArea({
      label : "个人简介:",
      placeholder:"个人简介：",
      rows:3,
      key:'introduce'
    })
  ];
  
   public form:FormGroup;
  

  toFormGroup(fields : FormFieldBase<any>[]){
    let group : any = {};
    fields.forEach(field => {
        group[field.key] = new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
  constructor() { }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);
  }
  
  onSubmit(){
    console.log("Form Value:",JSON.stringify(this.form.value))
  }
}
