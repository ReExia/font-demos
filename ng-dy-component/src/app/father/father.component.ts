import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, AfterContentInit, ComponentFactoryResolver } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit,AfterContentInit {

 //这里引用模板里面定义的dyncomp容器标签
 @ViewChild("dyncomp",{read:ViewContainerRef})
 dyncomp:ViewContainerRef;

 comp1:ComponentRef<ChildComponent>;
 comp2:ComponentRef<ChildComponent>;

 constructor(
   private resolver:ComponentFactoryResolver) {

 }

 ngOnInit() {
 }

 ngAfterContentInit(){
   console.log("动态创建组件的实例...");

   const model = this.resolver.resolveComponentFactory(ChildComponent);
   
   this.comp1 = this.dyncomp.createComponent(model);
  
   this.comp1.instance.title = "父组件传入的标题";

   //捕获子组件发射出来的事件
   this.comp1.instance.btnClick.subscribe((param) => {
     alert(param); //定义function()捕获
   })

   //可以创建多个组件实例出来
  //  let temp1=this.dyncomp.createComponent(model); 
  //  temp1.instance.title="第2个动态子组件";
  //  let temp2=this.dyncomp.createComponent(model); 
  //  temp2.instance.title="第3个动态子组件";
  //  let temp3=this.dyncomp.createComponent(model); 
  //  temp3.instance.title="第4个动态子组件";
  //  let temp4=this.dyncomp.createComponent(model); 
  //  temp4.instance.title="第5个动态子组件";
  //  let temp5=this.dyncomp.createComponent(model);
  //  temp5.instance.title="第6个动态子组件"; 
   

  
 }

 public destoryChild():void{
  this.comp1.destroy();
 }


}
