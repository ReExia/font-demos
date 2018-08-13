import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts8Component } from './charts8.component';

describe('Charts8Component', () => {
  let component: Charts8Component;
  let fixture: ComponentFixture<Charts8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Charts8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Charts8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
