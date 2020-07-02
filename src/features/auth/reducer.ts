import {createReducer} from 'redux-act';
import {initialAction} from './actions';

export const authReducer = createReducer<{name: string}>({}, {name: 'Wha'});

authReducer.on(initialAction, (state) => state)