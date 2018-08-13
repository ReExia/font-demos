import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBindComponent } from './value-bind.component';

describe('ValueBindComponent', () => {
  let component: ValueBindComponent;
  let fixture: ComponentFixture<ValueBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
