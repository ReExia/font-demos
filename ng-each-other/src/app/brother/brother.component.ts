import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.scss']
})
export class BrotherComponent implements OnInit {

  title : string = "没有父子关系的组件间通讯";

  constructor() { }

  ngOnInit() {
  }

}
