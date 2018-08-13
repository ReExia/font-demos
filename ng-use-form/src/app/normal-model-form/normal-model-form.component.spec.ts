import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalModelFormComponent } from './normal-model-form.component';

describe('NormalModelFormComponent', () => {
  let component: NormalModelFormComponent;
  let fixture: ComponentFixture<NormalModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
