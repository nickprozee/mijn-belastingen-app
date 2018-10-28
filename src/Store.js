import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {keyboardReducer} from './Reducers/keyboardReducer';
import {authenticationReducer} from './Reducers/authenticationReducer';
import {navigationReducer} from './Reducers/navigationReducer';
import {userReducer} from './Reducers/userReducer';

var allReducers = combineReducers({
    user: userReducer,
    keyboard: keyboardReducer,
    authentication: authenticationReducer,
    nav: navigationReducer
});

const middleWare = applyMiddleware(thunk);

export default store = createStore(allReducers, middleWare);