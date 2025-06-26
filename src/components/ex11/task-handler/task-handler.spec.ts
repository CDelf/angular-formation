import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHandler } from './task-handler';

describe('TaskHandler', () => {
  let component: TaskHandler;
  let fixture: ComponentFixture<TaskHandler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskHandler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
