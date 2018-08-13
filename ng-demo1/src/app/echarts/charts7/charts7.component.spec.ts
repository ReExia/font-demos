import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts7Component } from './charts7.component';

describe('Charts7Component', () => {
  let component: Charts7Component;
  let fixture: ComponentFixture<Charts7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Charts7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
