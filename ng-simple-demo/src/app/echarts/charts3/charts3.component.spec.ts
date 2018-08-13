import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts3Component } from './charts3.component';

describe('Charts3Component', () => {
  let component: Charts3Component;
  let fixture: ComponentFixture<Charts3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Charts3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
