import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {
  
  title : string = "模板局部变量"

  constructor() { }

  ngOnInit() {
  }

  getHeroInput(name : string){
    alert("value : " + name);
  }

 

}
