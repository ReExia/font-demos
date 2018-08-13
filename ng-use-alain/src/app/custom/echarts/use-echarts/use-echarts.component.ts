import { Component, OnInit , ViewChild} from '@angular/core';
import { ThemeComponent } from '../theme/theme.component';
import '../theme/theme.component.css';

@Component({
  selector: 'app-use-echarts',
  templateUrl: './use-echarts.component.html',
  styleUrls: ['./use-echarts.component.css']
})
export class UseEchartsComponent implements OnInit{


  currentType = 1;

  types = [1,2,3,4,5];



  constructor() { }

  ngOnInit() {
  }



  changeType(value : number){
    this.currentType = value;
  }
}
