import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts2',
  templateUrl: './charts2.component.html',
  styleUrls: ['./charts2.component.css']
})
export class Charts2Component implements OnInit {

  settings = {
    series: {
      type: 'pie',
      data: [
        {name: 'A', value: 1212},
        {name: 'B', value: 2323},
        {name: 'C', value: 1919}
      ]
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
