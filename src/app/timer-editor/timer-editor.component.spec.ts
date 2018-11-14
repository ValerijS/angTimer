import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerEditorComponent } from './timer-editor.component';

describe('TimerEditorComponent', () => {
  let component: TimerEditorComponent;
  let fixture: ComponentFixture<TimerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
