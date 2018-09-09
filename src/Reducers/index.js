import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import { keyboardReducer } from './keyboardReducer';
import { userReducer } from './userReducer';

export const allReducers = combineReducers({
    authentication: authenticationReducer,
    user: userReducer,
    keyboard: keyboardReducer
});