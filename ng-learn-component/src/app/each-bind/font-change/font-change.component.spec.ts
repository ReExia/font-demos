import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontChangeComponent } from './font-change.component';

describe('FontChangeComponent', () => {
  let component: FontChangeComponent;
  let fixture: ComponentFixture<FontChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
