import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgSwitchComponent } from './use-ng-switch.component';

describe('UseNgSwitchComponent', () => {
  let component: UseNgSwitchComponent;
  let fixture: ComponentFixture<UseNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
