import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts5Component } from './charts5.component';

describe('Charts5Component', () => {
  let component: Charts5Component;
  let fixture: ComponentFixture<Charts5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Charts5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
