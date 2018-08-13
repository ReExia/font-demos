import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorFileComponent } from './valor-file.component';

describe('ValorFileComponent', () => {
  let component: ValorFileComponent;
  let fixture: ComponentFixture<ValorFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
