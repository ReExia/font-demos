import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[my-high-light]'
})
export class MyDirectiveDirective {

  @Input()
  highLightColor : string;


  // @HostBinding("style.border")
  // border:string;

  @HostBinding("class")
  myClass:string;

  constructor(private el : ElementRef) {
    //console.log(el);
    // el.nativeElement.style.backgroundColor = "#ff3300";
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highLightColor);
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
  @HostListener('click') onClick() {
    // if(this.border != ""){
    //   this.border = "";
    // }else{
    //     this.border = "border: 10px solid #24B37B";
    // }
    if(this.myClass){
      this.myClass="";
    }else{
      this.myClass="my-border";
    }
  }
  
  //上述css最好写到外边，通过@HostBinding("class")引入
//   .my-border{
//     border: 3px solid #000099;
// }


}
