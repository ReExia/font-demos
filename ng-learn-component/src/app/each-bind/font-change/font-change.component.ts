import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-change',
  templateUrl: './font-change.component.html',
  styleUrls: ['./font-change.component.scss']
})
export class FontChangeComponent implements OnInit {

  @Input() size : number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  dec() { this.reSize(-1); }
  inc() { this.reSize(+1); }

  reSize(data : number){
    this.size = Math.min(40, Math.max(8, +this.size + data));
    this.sizeChange.emit(this.size);
  }

}
