import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-use-gcharts',
  templateUrl: './use-gcharts.component.html',
  styleUrls: ['./use-gcharts.component.css']
})
export class UseGchartsComponent implements OnInit {

  data: any[];


  constructor() {

  }

  ngOnInit() {
    this.data = [
      {genre: 'Sports', sold: 275},
      {genre: 'Strategy', sold: 115},
      {genre: 'Action', sold: 120},
      {genre: 'Shooter', sold: 350},
      {genre: 'Other', sold: 150}
    ];


  }

}
