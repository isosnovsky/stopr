import { combineReducers } from 'redux'

import {authReducer} from './features/auth/reducer';

export default combineReducers({
  auth: authReducer
})