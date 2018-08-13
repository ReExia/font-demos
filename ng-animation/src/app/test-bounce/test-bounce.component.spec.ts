import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBounceComponent } from './test-bounce.component';

describe('TestBounceComponent', () => {
  let component: TestBounceComponent;
  let fixture: ComponentFixture<TestBounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
