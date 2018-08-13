import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter, SimpleTableData, SimpleTableComponent } from '@delon/abc';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { ApplicationService } from '../application.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @ViewChild(SimpleTableComponent) child: SimpleTableComponent;

  // url = `https://randomuser.me/api/?results=10`;
  url = `http://localhost:8080/api/app/page`;

  searchData = {
    appId: '',
    appName: '',
    appKey: '',
    appSecret: '',
    operateRange: [] = [null, null],
    createRange: [] = [null, null],
  };

  columns: SimpleTableColumn[] = [
    {title: 'ID', index: 'appId', type: 'checkbox'},
    {title: 'App名称', index: 'appName'},
    {title: 'App钥匙', index: 'appKey'},
    {title: 'App加密串', index: 'appSecret'},
    {title: '操作时间', type: 'date', index: 'operateTime', dateFormat: 'YYYY-MM-DD'},
    {title: '创建时间', type: 'date', index: 'createTime'},
    {
        title: '操作区',
        buttons: [
            {text: '删除', type: 'del', click: (record: any) => this.deleteApp(record.appId)},
            {text: '修改', type: 'del', click: (record: any) => this.msg.success(`编辑${record.appId}!`)}
        ]
    }
];

  constructor(private applicationService: ApplicationService,
              private msg: NzMessageService) {

  }

  ngOnInit() {
  }

  deleteApp(id: string) {

    this.applicationService.deleteApp(id).subscribe((data) => {
      // console.log("deleteData", data);
      // return data.msg;
      this.msg.success(data.msg);
      this.child.load();
    });
  }

  checkboxChange(list: any[]) {
    console.log('checkboxChange', list);
  }

  dataChange(data: SimpleTableData[]) {
    return data.map((i: SimpleTableData, index: number) => {
      return i;
    });
  }

  resetSearchData() {
    this.searchData = {
      appId: '',
      appName: '',
      appKey: '',
      appSecret: '',
      operateRange: [] = [null, null],
      createRange: [] = [null, null],
    };
  }

  postSearchData(value: any) {
    this.child.load();
  }

  reSetSearchData() {
    this.searchData = {
      appId: '',
      appName: '',
      appKey: '',
      appSecret: '',
      operateRange: [] = [null, null],
      createRange: [] = [null, null],
    };
  }

  reloadDataTable() {
    this.child.load();
  }
  //日期校验
  disabledDate(current: Date): boolean {
    return current && current.getTime() > Date.now();
  }


}
