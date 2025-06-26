import {createReducer, on} from '@ngrx/store';
import {decrement, divideBy, increment, incrementBy, reset} from './counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState),
  on(incrementBy, (state, { nb }) => state + nb),
  on(divideBy, (state, { nb }) => Math.floor(state / nb))
);
