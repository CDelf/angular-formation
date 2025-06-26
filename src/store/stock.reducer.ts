import {createReducer, on} from '@ngrx/store';
import {addToStock, removeFromStock, reset} from './stock.action';

export const initialState = 0;

export const stockReducer = createReducer(
  initialState,
  on(addToStock, (state, {nb}) => state + nb),
  on(removeFromStock, (state, {nb}) => state - nb),
  on(reset, () => initialState)
);
