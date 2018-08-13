import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  title : string = "默认标题";

  data = [
    "jack",
    "rose",
    "zhangsan"
  ]

  @Output()
  message : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeTitle(){
    this.title = this.title + "1";
  }

  emitMessage(){
    this.message.emit(`send title : ${this.title}`)
  }


}
