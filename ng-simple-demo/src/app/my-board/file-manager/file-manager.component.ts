import { Component, OnInit } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

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
