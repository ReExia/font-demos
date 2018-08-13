import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-bind',
  templateUrl: './value-bind.component.html',
  styleUrls: ['./value-bind.component.scss']
})
export class ValueBindComponent implements OnInit {

  title : string = "属性值绑定"
  
  imgSrc : string = "./assets/imgs/1.jpeg";

  constructor() { }

  ngOnInit() {
  }

  changeImg(){
    if(this.imgSrc == "./assets/imgs/1.jpeg"){
      this.imgSrc = "./assets/imgs/2.jpeg";
    }else{
      this.imgSrc = "./assets/imgs/1.jpeg";
    }
  }

}
