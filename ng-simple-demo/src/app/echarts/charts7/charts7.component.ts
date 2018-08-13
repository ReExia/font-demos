import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts7',
  templateUrl: './charts7.component.html',
  styleUrls: ['./charts7.component.css']
})
export class Charts7Component implements OnInit {
  chartOptionsong : any;
  constructor() { }

  ngOnInit() {

    this.chartOptionsong = {
      tooltip : {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
    };

    setInterval(() => {
      let random1 = parseFloat((Math.random() * 100).toFixed(2));
      this.chartOptionsong = {
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {
              formatter: '{value}%',
              fontSize: 9
            },
            data: [{value: random1, name: '完成率'}],
            axisLabel: {
              fontSize: 8
            },
            title: {
              fontSize: 9,
              padding: [138, 4, 5, 6]
            }
            // markPoint: {
            //   symbolSize: 25
            // }
          }
        ]
      };
    }, 2000);

  }

}
