import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggyComponent } from './draggy.component';

describe('DraggyComponent', () => {
  let component: DraggyComponent;
  let fixture: ComponentFixture<DraggyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
