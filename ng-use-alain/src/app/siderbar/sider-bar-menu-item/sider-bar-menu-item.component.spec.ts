import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderBarMenuItemComponent } from './sider-bar-menu-item.component';

describe('SiderBarMenuItemComponent', () => {
  let component: SiderBarMenuItemComponent;
  let fixture: ComponentFixture<SiderBarMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderBarMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderBarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
