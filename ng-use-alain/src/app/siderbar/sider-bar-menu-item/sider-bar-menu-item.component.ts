import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../model/MenuItem";

@Component({
  selector: 'app-sider-bar-menu-item',
  templateUrl: './sider-bar-menu-item.component.html',
  styleUrls: ['./sider-bar-menu-item.component.css']
})
export class SiderBarMenuItemComponent implements OnInit {

  @Input()
  item : MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
