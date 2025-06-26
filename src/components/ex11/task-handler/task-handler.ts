import { Component } from '@angular/core';
import {Todo} from '../../../models/todo.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {addTodo, removeTodo} from '../../../store/task.action';

@Component({
  selector: 'app-task-handler',
  imports: [
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './task-handler.html',
  styleUrl: './task-handler.css'
})
export class TaskHandler {
  todos$ : Observable<Todo[]>;

  newTitle = '';
  newDeadline = '';
  newAssignedTo = '';

  constructor(private store : Store<{todos: Todo[]}>) {
    this.todos$ = store.select('todos');
  }

  addTask() {
    const newTodo: Todo = {
      id: Date.now(),
      title: this.newTitle,
      deadline: this.newDeadline,
      assignedTo: this.newAssignedTo
    };

    this.store.dispatch(addTodo({ task: newTodo }));

    // Réinitialiser le formulaire
    this.newTitle = '';
    this.newDeadline = '';
    this.newAssignedTo = '';
  }

  removeTask(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

}
