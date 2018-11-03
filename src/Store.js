import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { keyboardReducer } from './Reducers/keyboardReducer';
import { authenticationReducer } from './Reducers/authenticationReducer';
import { userReducer } from './Reducers/userReducer';
import { screenReducer } from './Reducers/screenReducer';

var allReducers = combineReducers({
    user: userReducer,
    keyboard: keyboardReducer,
    authentication: authenticationReducer,
    screen: screenReducer
});

const middleWare = applyMiddleware(thunk, logger);
const store = createStore(allReducers, middleWare);

export default store;