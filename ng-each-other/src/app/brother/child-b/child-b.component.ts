import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {

  title : string = "Child-B";

  public events:Array<any>=[];

  constructor(public eventBusService:EventBusService) { }

  ngOnInit() {
    this.eventBusService.eventBus.subscribe((value) => {
      this.events.push(value + "-" + new Date());
      this.printLog();
    })
  }

  printLog(){
    console.log("message form A");
    // this.eventBusService.eventBus.unsubscribe();
    // console.log("订阅解除");
  }

}
