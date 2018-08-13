import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-lang',
  templateUrl: './template-lang.component.html',
  styleUrls: ['./template-lang.component.scss']
})
export class TemplateLangComponent implements OnInit {

  public title : string = "插值语法";

  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "Setsuna";
  }

}