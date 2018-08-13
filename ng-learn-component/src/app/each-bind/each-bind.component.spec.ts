import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachBindComponent } from './each-bind.component';

describe('EachBindComponent', () => {
  let component: EachBindComponent;
  let fixture: ComponentFixture<EachBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
