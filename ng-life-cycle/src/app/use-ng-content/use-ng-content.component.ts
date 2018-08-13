import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-use-ng-content',
  templateUrl: './use-ng-content.component.html',
  styleUrls: ['./use-ng-content.component.scss']
})
export class UseNgContentComponent implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked  {

  title : string = "测试ng-Content -- UseNgContentComponent";

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterContentChecked(): void {
    console.log("father -> ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("father -> ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("father -> ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("father ->  ngAfterViewInit");
    //注意 : 打开这个注释会报错,因为装配数据和视图顺序的问题
    // this.title = "xxxx";
  }
}
