import { Component, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
 
  title = 'app';


  constructor(){
    let i = 1;
    let j = 2;
    let k = 3;
    let n = i + j;
    console.log(i+j);
  }

}
