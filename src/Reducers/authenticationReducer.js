import * as ACTIONTYPES from '../Actions/authenticationActions';

const default_state = {
    isAuthenticated: true,
    authKey: '123123',
    storeCredentials: false,
    username: '',
    password: ''
}

export function authenticationReducer(state = default_state, action) {
    switch (action.type) {

        case ACTIONTYPES.AUTHENTICATE_USER:

            return {
                ...state,
                isAuthenticated: true,
                authKey: '123123'
            }

        case ACTIONTYPES.AUTHENTICATE_REMEMBER_USER:

            return {
                ...state,
                storeCredentials: action.payload
            }

        case ACTIONTYPES.AUTHENTICATE_SET_USERNAME:

            return {
                ...state,
                username: action.payload
            }

        case ACTIONTYPES.AUTHENTICATE_SET_PASSWORD:

            return {
                ...state,
                password: action.payload
            }

        default:

            return state;
    }
}