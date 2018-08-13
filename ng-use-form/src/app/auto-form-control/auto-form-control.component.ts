import { Component, OnInit, Input } from '@angular/core';
import { FormFieldBase } from '../moel/form-field-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-form-control',
  templateUrl: './auto-form-control.component.html',
  styleUrls: ['./auto-form-control.component.css']
})
export class AutoFormControlComponent implements OnInit {

  @Input() field : FormFieldBase<any>;
  @Input() form : FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
