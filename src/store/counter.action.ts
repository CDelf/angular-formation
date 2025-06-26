import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const incrementBy = createAction('[Counter] Increment By number', props<{nb : number}>());
export const divideBy = createAction('[Counter] Divide By number', props<{nb : number}>());
