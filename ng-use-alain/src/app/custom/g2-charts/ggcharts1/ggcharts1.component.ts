import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import * as G2 from "@antv/g2/src";
import {Observable} from "rxjs/Observable";
@Component({
  selector: 'app-ggcharts1',
  templateUrl: './ggcharts1.component.html',
  styleUrls: ['./ggcharts1.component.css']
})
export class Ggcharts1Component implements OnInit ,AfterViewInit{

  @Input()
  data : any[];




  ngAfterViewInit(): void {
    let chart = new G2.Chart({
      container : 'c1',
      forceFit: true,
      height : 300,
      padding: [ 20, 20, 95, 80 ] // 上，右，下，左
    });

    // Step 2: 载入数据源
    chart.source(this.data);
    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval().position('genre*sold').color('genre');
    // Step 4: 渲染图表
    setInterval(() => {
      chart.render();
    },1000);
  }



  constructor(){

  }

  ngOnInit(): void {

  }





}
