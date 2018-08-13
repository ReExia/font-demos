import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormControlComponent } from './auto-form-control.component';

describe('AutoFormControlComponent', () => {
  let component: AutoFormControlComponent;
  let fixture: ComponentFixture<AutoFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
