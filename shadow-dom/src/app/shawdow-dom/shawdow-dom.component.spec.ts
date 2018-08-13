import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawdowDomComponent } from './shawdow-dom.component';

describe('ShawdowDomComponent', () => {
  let component: ShawdowDomComponent;
  let fixture: ComponentFixture<ShawdowDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShawdowDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShawdowDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
