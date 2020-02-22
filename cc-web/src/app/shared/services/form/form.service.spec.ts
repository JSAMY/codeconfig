import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formservice } from './form.service';

describe('FormserviceComponent', () => {
  let component: Formservice;
  let fixture: ComponentFixture<Formservice>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formservice ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formservice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
