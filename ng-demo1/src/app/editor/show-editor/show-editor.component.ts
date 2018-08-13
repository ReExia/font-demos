import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-editor',
  templateUrl: './show-editor.component.html',
  styleUrls: ['./show-editor.component.css']
})
export class ShowEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   keyupHandlerFunction(value : any){
    console.log("tinymceValue", value);
  }

}
