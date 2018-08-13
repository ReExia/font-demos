import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFlyinComponent } from './test-flyin.component';

describe('TestFlyinComponent', () => {
  let component: TestFlyinComponent;
  let fixture: ComponentFixture<TestFlyinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFlyinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFlyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
