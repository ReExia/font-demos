import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClickAniComponent } from './test-click-ani.component';

describe('TestClickAniComponent', () => {
  let component: TestClickAniComponent;
  let fixture: ComponentFixture<TestClickAniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestClickAniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClickAniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
