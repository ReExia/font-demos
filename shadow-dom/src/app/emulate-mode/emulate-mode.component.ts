import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulate-mode',
  encapsulation:ViewEncapsulation.Emulated,//默认模式,
  templateUrl: './emulate-mode.component.html',
  styleUrls: ['./emulate-mode.component.scss']
})
export class EmulateModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
