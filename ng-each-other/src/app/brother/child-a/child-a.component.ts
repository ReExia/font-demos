import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {

  title : string = "Child-A";

  constructor(private eventBusService : EventBusService) { }

  ngOnInit() {
  }

  triggerEvent() : void{
    this.eventBusService.eventBus.next("Chlid-A触发的事件");
  }

}
