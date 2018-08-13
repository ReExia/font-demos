import { Component, OnInit } from '@angular/core';
import {BoardVoService} from "../../common/service/boardVoService";
import {BoardVO} from "../../common/model/boardVO";
import {Router} from "@angular/router";
import {passBoolean} from 'protractor/built/util';

@Component({
  selector: 'app-data-board',
  templateUrl: './data-board.component.html',
  styleUrls: ['./data-board.component.css']
})
export class DataBoardComponent implements OnInit {

  list : BoardVO[];

  ths : string[] = [
    '资金渠道',
    '渠道可用余额',
    '未放款项目金额(含失效)',
    '未放款项目笔数(含失败)',
    '未放款金额',
    '未放款笔数',
    '失败笔数',
    '失败金额',
    '操作'
  ];

  constructor(
    private boardVoService : BoardVoService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getPage(1);
  }

  //页数
  pageNum : number;
  //当前页
  currentPage : number;
  //起始页
  startPage : number;
  //结束页
  endPage : number;
  //页数距离
  pageDistance : number;
  //总页数
  totalPages : number;
  //是不是最后一页
  isLastPage : boolean;
  //是不是第一页
  firstPage : boolean;

  pageNums;

  getPage(pageNum : any){
    this.pageNums = new Array();
    this.boardVoService
      .getPage(pageNum)
      .subscribe(
        (data) => {
          //todo
          // console.log("data",data);
          this.list = data.data as BoardVO[];
          this.pageNum = parseInt(data.pageNum);
          this.currentPage = parseInt(data.currentPage);
          this.startPage = parseInt(data.startPage);
          this.endPage = parseInt(data.endPage);
          this.pageDistance = parseInt(data.pageDistance);
          this.totalPages = parseInt(data.totalPages);
          this.isLastPage = data.isLastPage;
          this.firstPage = data.firstPage;
        },
        (err) => {
          //todo
          console.log("err",err);
        },
        () => {
          for (let i = this.startPage ; i <= this.endPage ; i ++){
            this.pageNums.push(i);
          }
        }
      );
  }

  edit(value : BoardVO){
    this.router.navigate(['myBoard/edit',value.id]);
  }

  deleteVo(value : BoardVO){
    this.boardVoService
      .deleteData(value.id)
      .subscribe(
        (data) => {
          console.log("data",data);
          //删除后更新页面
          this.getPage(1);
        },
        (err) => {
          console.log("err",err)
        }
      )
  }

}
