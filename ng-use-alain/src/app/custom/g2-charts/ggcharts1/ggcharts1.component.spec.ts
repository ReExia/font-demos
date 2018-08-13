import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ggcharts1Component } from './ggcharts1.component';

describe('Ggcharts1Component', () => {
  let component: Ggcharts1Component;
  let fixture: ComponentFixture<Ggcharts1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ggcharts1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ggcharts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
