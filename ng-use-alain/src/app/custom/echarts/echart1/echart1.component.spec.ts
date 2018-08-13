import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Echart1Component } from './echart1.component';

describe('Echart1Component', () => {
  let component: Echart1Component;
  let fixture: ComponentFixture<Echart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Echart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Echart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
