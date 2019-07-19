import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderPage } from './builder.page';

describe('BuilderPage', () => {
  let component: BuilderPage;
  let fixture: ComponentFixture<BuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
