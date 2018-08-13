import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-ng-class',
  templateUrl: './use-ng-class.component.html',
  styleUrls: ['./use-ng-class.component.scss']
})
export class UseNgClassComponent implements OnInit {
  
  title : string = "ngClass";

  flag = false;

  currentClass = {
    "btn" : true,
    "btn-info" : this.flag,
    "btn-warning" : !this.flag
  };

  constructor() { 
    
  }

  ngOnInit() {
  }

  changeClass() {
    this.flag = ! this.flag;
    this.currentClass = {
      "btn" : true,
      "btn-info" : this.flag,
      "btn-warning" : !this.flag
    }
  }

}
