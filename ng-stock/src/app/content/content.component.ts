import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle: string = '';
  pageDesc: string = '';

  constructor(private router: Router) {
    this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe((event:NavigationEnd) => {
            if(event.url == '/dashboard'){
              this.pageTitle = '首页';
              this.pageDesc = '来啊,互相伤害啊';
            }
            else if(event => event.url.startWith('/stock')){
                  this.pageTitle = '股票信息管理';
                  this.pageDesc = '管理股票';
            }
        })
  }

  ngOnInit() {
  }

}
