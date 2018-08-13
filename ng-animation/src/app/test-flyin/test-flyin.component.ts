import { Component, OnInit } from '@angular/core';
import { flyIn } from '../user-animations/fly-in';
@Component({
  selector: 'app-test-flyin',
  templateUrl: './test-flyin.component.html',
  styleUrls: ['./test-flyin.component.scss'],
  animations : [flyIn]
})
export class TestFlyinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
