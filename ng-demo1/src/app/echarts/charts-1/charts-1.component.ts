import {Component, ElementRef, OnInit} from '@angular/core';
@Component({
  selector: 'app-charts-1',
  templateUrl: './charts-1.component.html',
  styleUrls: ['./charts-1.component.css']
})
export class Charts1Component implements OnInit {
  chartOption : any;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {



    setInterval(() => {
      let arr = this.randomData();
      this.chartOption = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        //X 轴坐标文件
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        // y 轴坐标文件
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: arr
        }]
      };
    },1000);


  }
  randomData(){
    let array = new Array();
    for(let i = 0 ; i < 6 ; i++){
      let value = Math.floor(Math.random()*100+1);
      array.push(value);
    }
    return array;
  }
}
