import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce,shake } from 'ng-animate';
@Component({
  selector: 'app-test-bounce',
  templateUrl: './test-bounce.component.html',
  styleUrls: ['./test-bounce.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
  ],
})
export class TestBounceComponent implements OnInit {

  bounce: any;


  constructor() { }

  ngOnInit() {
  }
  


}
