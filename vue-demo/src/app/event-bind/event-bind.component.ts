import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.scss']
})
export class EventBindComponent implements OnInit {

  title : string = "事件绑定";
  constructor() { }

  ngOnInit() {
  }

  bindClick(event){
    console.log("event", event);
    alert("测试弹出事件");
  }

}
