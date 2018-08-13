import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-pipe',
  templateUrl: './use-pipe.component.html',
  styleUrls: ['./use-pipe.component.scss']
})
export class UsePipeComponent implements OnInit {

  title : string = "默认日期管道";

  currentDate : Date;

  constructor() { }

  ngOnInit() {

    setInterval(
      ()=> {
        this.currentDate = new Date()
      },
    1000)
    
  }

}
