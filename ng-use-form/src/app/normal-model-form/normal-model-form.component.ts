import { Component, OnInit } from '@angular/core';
import { User } from '../moel/user';

@Component({
  selector: 'app-normal-model-form',
  templateUrl: './normal-model-form.component.html',
  styleUrls: ['./normal-model-form.component.css']
})
export class NormalModelFormComponent implements OnInit {

  user : User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(value:any){
    console.log("------------------------------")
    console.log("表单提交结果:",value)
    console.log("------------------------------")
  }

}
