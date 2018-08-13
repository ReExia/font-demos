import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent)
  child : ChildComponent;

  messageValue : string = "默认信息";

  constructor() { }

  ngOnInit() {
    //初始化的时候订阅子组件发送事件
    this.changeChildData();
  }

  changeChildData(){
    this.child.message.subscribe((value) => {
      alert("changeChildData : " + value);
    })
  }

  receiveMessage(event){
    alert(`receive emit message is ${event}`);
  }
  
  useChildMethod(){
    this.child.changeTitle();
  }
}
