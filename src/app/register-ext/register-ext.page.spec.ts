import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExtPage } from './register-ext.page';

describe('RegisterExtPage', () => {
  let component: RegisterExtPage;
  let fixture: ComponentFixture<RegisterExtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterExtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
