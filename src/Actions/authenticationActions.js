export const AUTHENTICATE_USER = 'authentication:authenticateUser';
export const AUTHENTICATE_USER_START = 'authentication:authenticateUser_START';
export const AUTHENTICATE_USER_SUCCES = 'authentication:authenticateUser_SUCCESS';
export const AUTHENTICATE_USER_FAILED = 'authentication:authenticateUser_FAILED';
export const AUTHENTICATE_REMEMBER_USER = 'authentication:setRememberCredentials';
export const AUTHENTICATE_SET_USERNAME = 'authentication:setUsername';
export const AUTHENTICATE_SET_PASSWORD = 'authentication:setPassword';
export const AUTHENTICATE_LOGOFF = 'authentication:logoff';
export const AUTHENTICATE_IS_AUTHENTICATING = 'authentication:isAuthenticating';



export function authenticateUser(type, payload) {
    return {
        type,
        payload
    }
}

export function setIsAuthenticating(value){
    return {
        type: AUTHENTICATE_IS_AUTHENTICATING,
        payload: value
    }
}

export function logoffUser() {
    return { 
        type: AUTHENTICATE_LOGOFF 
    }
}

export function setRememberCredentials(remember) {
    return {
        type: AUTHENTICATE_REMEMBER_USER,
        payload: remember
    }
}

export function setUsername(username) {
    return {
        type: AUTHENTICATE_SET_USERNAME,
        payload: username
    }
}

export function setPassword(password) {
    return {
        type: AUTHENTICATE_SET_PASSWORD,
        payload: password
    }
}