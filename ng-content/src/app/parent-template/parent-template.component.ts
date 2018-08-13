import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-template',
  templateUrl: './parent-template.component.html',
  styleUrls: ['./parent-template.component.scss']
})
export class ParentTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  receiveMessage(event){
    console.log(event);
  }

}
