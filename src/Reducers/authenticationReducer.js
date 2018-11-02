import * as ACTIONTYPES from '../Actions/authenticationActions';

const default_state = {

    isAuthenticating: false,
    storeCredentials: true,

    authKey: '',
    username: 'Nick Prozee',
    password: 'Nick Prozee',

    error: ''

}

export function authenticationReducer(state = default_state, action) {
    switch (action.type) {

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

        case ACTIONTYPES.AUTHENTICATE_USER_START:

            return {
                ...state,
                isAuthenticating: true
            }

        case ACTIONTYPES.AUTHENTICATE_USER_SUCCES:

            return {
                ...state,
                authKey: action.payload.authKey,
                isAuthenticating: false
            }

        case ACTIONTYPES.AUTHENTICATE_USER_FAILED:

            return {
                ...state,
                error: action.payload,
                isAuthenticating: false
            }

        default:

            return state;
    }
}