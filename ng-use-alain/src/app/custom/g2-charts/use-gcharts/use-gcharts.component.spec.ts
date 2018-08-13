import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseGchartsComponent } from './use-gcharts.component';

describe('UseGchartsComponent', () => {
  let component: UseGchartsComponent;
  let fixture: ComponentFixture<UseGchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseGchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseGchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
