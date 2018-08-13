import { ElementRef, AfterViewInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemeType } from '@delon/theme';
import { NgxEchartsService } from 'ngx-echarts';
import * as $ from 'jquery';
declare var echarts: any;
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit, AfterViewInit {

  themes = [
    "vintage",
    "dark",
    "macarons",
    "infographic",
    "shine",
    "roma"
  ];

  options = {
    title: {
      text: 'Chart',
      subtext: 'Mocking Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'rose1' },
          { value: 5, name: 'rose2' },
          { value: 15, name: 'rose3' },
          { value: 25, name: 'rose4' },
          { value: 20, name: 'rose5' },
          { value: 35, name: 'rose6' },
          { value: 30, name: 'rose7' },
          { value: 40, name: 'rose8' }
        ]
      }
    ]
  };

  constructor(private el: ElementRef,
    private ngxEchartsService: NgxEchartsService) {
    // let chart = echarts.init(,this.currentTheme);

  }

  ngOnInit() {
    //清空内容
    let container = $("#chartsContainer");
    container.empty();
  }

  ngAfterViewInit(): void {
    this.createChart(this.options, "");
  }



  createChart(options: any, theme: string) {


    //清空内容
    let container = $("#chartsContainer");
    container.empty();

    //追加图表div
    let child = $("<div id='mychart' style='width:100%;height:500px'></div>");
    child.appendTo(container);


    // this.ngxEchartsService.init(document.getElementById("secondCharts"),"dark",this.options);
    let chart = echarts.init(document.getElementById("mychart"), theme);
    chart.setOption(options);
  }


}
