import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-ng-switch',
  templateUrl: './use-ng-switch.component.html',
  styleUrls: ['./use-ng-switch.component.scss']
})
export class UseNgSwitchComponent implements OnInit {


  title : string = "ngSwitch || ngModel";
  
  status : number = 0;

  constructor() { }

  ngOnInit() {

  }



}
