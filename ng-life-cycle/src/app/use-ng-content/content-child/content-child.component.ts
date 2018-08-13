import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {


  title : string = "ContentChildComponent";

  constructor() { }

  ngOnInit() {
  }


  ngAfterContentChecked(): void {
    console.log("child ->  ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("child ->  ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log("child -> ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("child -> ngAfterViewChecked");
  }

}
