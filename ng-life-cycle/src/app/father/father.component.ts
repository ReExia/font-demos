import { Component, OnInit ,ChangeDetectionStrategy, DoCheck} from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
  
})
export class FatherComponent implements OnInit,DoCheck {

  ngDoCheck(): void {
    console.log("FatherComponent -> docheck...")
  }
  public userName : string = "用户名";

  public userObj : any = {
    username : "张三",
    remark : "备注"
  }

  constructor() { }

  ngOnInit() {
  }

}
