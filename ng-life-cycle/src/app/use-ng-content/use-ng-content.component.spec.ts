import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseNgContentComponent } from './use-ng-content.component';

describe('UseNgContentComponent', () => {
  let component: UseNgContentComponent;
  let fixture: ComponentFixture<UseNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
