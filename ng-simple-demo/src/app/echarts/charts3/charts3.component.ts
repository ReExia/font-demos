import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts3',
  templateUrl: './charts3.component.html',
  styleUrls: ['./charts3.component.css']
})
export class Charts3Component implements OnInit {

  settings = {
    title: {text: 'Line Chart'},
    tooltip: {},
    toolbox: {
      feature: {
        dataView: {},
        saveAsImage: {
          pixelRatio: 2
        },
        restore: {}
      }
    },
    xAxis: {},
    yAxis: {},
    series: [{
      type: 'line',
      smooth: true,
      data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
