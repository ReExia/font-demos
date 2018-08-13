import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnInit ,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  message : string;
  @Input()
  public title:string = "默认标题";
  
  public logs : Array<any> = [];


  constructor() {
    this.logs.push("LifeCycleComponent -> constructor...")
   }

  //初始化时执行一次
  ngOnInit() {
    this.logs.push("ngOnInit...");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push("LifeCycleComponent -> ngOnChanges...");
  }


  ngDoCheck(): void {
    this.logs.push("LifeCycleComponent -> ngDoCheck...");
  }

  ngAfterContentChecked(): void {
    this.logs.push("LifeCycleComponent -> ngAfterContentChecked...");
  }

  ngAfterViewInit(): void {
    this.logs.push("LifeCycleComponent -> ngAfterViewInit...");
  }
 
  ngAfterViewChecked(): void {
    this.logs.push("LifeCycleComponent -> ngAfterViewChecked...");
  }

  ngAfterContentInit(): void {
    this.logs.push("LifeCycleComponent -> ngAfterContentInit...");
  }

  ngOnDestroy(): void {
    this.logs.push("LifeCycleComponent -> ngOnDestroy...");
  }


}
