import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFormsComponent } from './auto-forms.component';

describe('AutoFormsComponent', () => {
  let component: AutoFormsComponent;
  let fixture: ComponentFixture<AutoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
