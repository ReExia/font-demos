import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.scss']
})
export class ChildSecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  say(value){
    console.log("I am second child component" + value);
  }

}
