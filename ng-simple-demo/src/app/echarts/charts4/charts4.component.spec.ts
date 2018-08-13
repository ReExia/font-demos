import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts4Component } from './charts4.component';

describe('Charts4Component', () => {
  let component: Charts4Component;
  let fixture: ComponentFixture<Charts4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Charts4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
