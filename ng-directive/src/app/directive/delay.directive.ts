import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
) { }

//引用的时候需要 *appDelay= value
@Input() set appDelay(time: number) {
    setTimeout(() => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
}

}
