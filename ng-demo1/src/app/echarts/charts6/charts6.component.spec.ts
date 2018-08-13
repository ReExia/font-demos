import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts6Component } from './charts6.component';

describe('Charts6Component', () => {
  let component: Charts6Component;
  let fixture: ComponentFixture<Charts6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Charts6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
