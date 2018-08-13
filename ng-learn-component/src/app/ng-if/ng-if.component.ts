import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  title : string = "ngIf";
  
  flag : boolean = true; 

  constructor() { }

  ngOnInit() {
  }

  changeFlag(){
    this.flag = !this.flag;
  }

}
