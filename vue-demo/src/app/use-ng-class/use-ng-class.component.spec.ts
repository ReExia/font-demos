import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgClassComponent } from './use-ng-class.component';

describe('UseNgClassComponent', () => {
  let component: UseNgClassComponent;
  let fixture: ComponentFixture<UseNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
