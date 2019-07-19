import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStatComponent } from './input-stat.component';

describe('InputStatComponent', () => {
  let component: InputStatComponent;
  let fixture: ComponentFixture<InputStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
