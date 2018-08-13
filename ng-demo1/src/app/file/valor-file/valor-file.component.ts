import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-valor-file',
  templateUrl: './valor-file.component.html',
  styleUrls: ['./valor-file.component.css']
})
export class ValorFileComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: "http://localhost:8080/file/upload"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor() { }

  ngOnInit() {
  }

}
