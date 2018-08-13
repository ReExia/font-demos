import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {MenuData} from "../data/MenuData";
import { MenuItem } from '../model/MenuItem';
@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit {


  // @Input()
  // menuData : any;
  menuData = MenuData as MenuItem[];


  // @Input()
  // isCollapsed : boolean;
  colose = true;

  constructor(private el : ElementRef) { }

  ngOnInit() {
  }

  createMenu(){


  }

}
