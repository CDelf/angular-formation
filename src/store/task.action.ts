import {createAction, props} from '@ngrx/store';
import {Todo} from '../models/todo.model'

export const addTodo =  createAction('[Todo] Add', props<{task : Todo}>());
export const removeTodo = createAction('[Todo] Remove', props<{id : number}>());
