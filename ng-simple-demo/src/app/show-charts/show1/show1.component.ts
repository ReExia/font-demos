import {AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgxEchartsService} from 'ngx-echarts';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ChartsService} from '../../common/service/charts.service';
@Component({
  selector: 'app-show1',
  templateUrl: './show1.component.html',
  styleUrls: ['./show1.component.css']
})
export class Show1Component implements OnInit ,OnChanges,DoCheck,AfterViewInit{
  ngAfterViewInit(): void {
  }




  ngDoCheck(): void {

  }


  ngOnChanges(changes: SimpleChanges): void {
  }


  hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
  days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

  data = [];

  option = {
    tooltip: {},
    visualMap: {
      max: 20,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
      }
    },
    xAxis3D: {
      type: 'category',
      data: this.hours
    },
    yAxis3D: {
      type: 'category',
      data: this.days
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      viewControl: {
        // projection: 'orthographic'
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    series: [
      {
        type: 'bar3D',
        data: [].map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          }
        }),
      shading: 'lambert',

      label: {
        textStyle: {
          fontSize: 16,
          borderWidth: 1
        }
      },

      emphasis: {
        label: {
          textStyle: {
            fontSize: 20,
            color: '#900'
          }
        },
        itemStyle: {
          color: '#900'
        }
      }
    }]
  };



  echartsIntance : any;

  constructor(
    private es: NgxEchartsService,
    private chartService : ChartsService
  ) {
    setInterval(() => {
      this.chartService.getData().subscribe(
        (chartsData) => {
          // console.log("chartsData", chartsData);
          this.option = {
            tooltip: {},
            visualMap: {
              max: 20,
              inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              }
            },
            xAxis3D: {
              type: 'category',
              data: this.hours
            },
            yAxis3D: {
              type: 'category',
              data: this.days
            },
            zAxis3D: {
              type: 'value'
            },
            grid3D: {
              boxWidth: 200,
              boxDepth: 80,
              viewControl: {
                // projection: 'orthographic'
              },
              light: {
                main: {
                  intensity: 1.2,
                  shadow: true
                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [
              {
                type: 'bar3D',
                data: chartsData.map(function (item) {
                  return {
                    value: [item[1], item[0], item[2]],
                  }
                }),
                shading: 'lambert',

                label: {
                  textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                  }
                },

                emphasis: {
                  label: {
                    textStyle: {
                      fontSize: 20,
                      color: '#900'
                    }
                  },
                  itemStyle: {
                    color: '#900'
                  }
                }
              }]
          };
        },
        (err) => {
          console.log(err)
        })
    },2000);
  }

  ngOnInit() {

  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  getData(){
        this.chartService.getData().subscribe(
          (chartsData) => {
            // console.log("chartsData", chartsData);
            this.data = chartsData;
          },
          (err) => {
            console.log(err)
          })
  }


}
