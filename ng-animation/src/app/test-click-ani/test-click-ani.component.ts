import { Component, OnInit } from '@angular/core';
import { shake} from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'app-test-click-ani',
  templateUrl: './test-click-ani.component.html',
  styleUrls: ['./test-click-ani.component.scss'],
  animations : [
    trigger('shake', [transition('* => *', useAnimation(shake))])
  ]
})
export class TestClickAniComponent implements OnInit {

  shake : any;
  status : any = true;

  constructor() { }

  ngOnInit() {
  }
  
  changeStatus(){
   this.status = !this.status;
  }
 

}
