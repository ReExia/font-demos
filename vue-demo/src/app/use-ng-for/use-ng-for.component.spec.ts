import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgForComponent } from './use-ng-for.component';

describe('UseNgForComponent', () => {
  let component: UseNgForComponent;
  let fixture: ComponentFixture<UseNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
