import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLangComponent } from './template-lang.component';

describe('TemplateLangComponent', () => {
  let component: TemplateLangComponent;
  let fixture: ComponentFixture<TemplateLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
