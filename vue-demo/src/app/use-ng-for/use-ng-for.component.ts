import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-ng-for',
  templateUrl: './use-ng-for.component.html',
  styleUrls: ['./use-ng-for.component.scss']
})
export class UseNgForComponent implements OnInit {

  title : string = "ngFor";

  list : Array<string> = [
    "男性",
    "女性",
    "外星人"
  ]

  constructor() { }

  ngOnInit() {
  }

}
