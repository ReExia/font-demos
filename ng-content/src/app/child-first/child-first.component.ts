import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, ContentChild } from '@angular/core';
import { ChildSecondComponent } from '../child-second/child-second.component';

@Component({
  selector: 'app-child-first',
  templateUrl: './child-first.component.html',
  styleUrls: ['./child-first.component.scss']
})
export class ChildFirstComponent implements OnInit ,AfterContentInit{

  @ContentChild(ChildSecondComponent)
  childSecondComponent : ChildSecondComponent;
  
  @Input()
  title : string = "默认标题";

  @Output()
  message : EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit() {
    this.emitMessage();
  }


   emitMessage(){
     this.message.emit(`${this.title}-->发送出的消息`);
   }
  

   ngAfterContentInit(): void {
     this.childSecondComponent.say(":"+"hello");
  }


}
