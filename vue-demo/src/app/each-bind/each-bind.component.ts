import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-bind',
  templateUrl: './each-bind.component.html',
  styleUrls: ['./each-bind.component.scss']
})
export class EachBindComponent implements OnInit {

  title : string = "双向绑定";
  fontSizePx:number=14;
  constructor() { }

  ngOnInit() {
  }

}
