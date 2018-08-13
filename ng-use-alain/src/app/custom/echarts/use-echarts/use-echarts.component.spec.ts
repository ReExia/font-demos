import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseEchartsComponent } from './use-echarts.component';

describe('UseEchartsComponent', () => {
  let component: UseEchartsComponent;
  let fixture: ComponentFixture<UseEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
