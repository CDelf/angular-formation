import {createAction, props} from '@ngrx/store';

export const addToStock = createAction('[Stock] AddToStock', props<{nb : number}>());
export const removeFromStock = createAction('[Stock] RemoveFromStock', props<{nb : number}>());
export const reset = createAction('[Stock] Reset');
