import { Todo } from '../models/todo.model';
import {createReducer, on} from '@ngrx/store';
import {addTodo, removeTodo} from './task.action';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { task }) => [...state, task]),
  on(removeTodo, (state, { id }) => state.filter(todo => todo.id !== id))
);



