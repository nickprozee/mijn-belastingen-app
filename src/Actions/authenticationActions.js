export const AUTHENTICATE_USER = 'authentication:authenticateUser';
export const AUTHENTICATE_REMEMBER_USER = 'authentication:setRememberCredentials';
export const AUTHENTICATE_SET_USERNAME = 'authentication:setUsername';
export const AUTHENTICATE_SET_PASSWORD = 'authentication:setPassword';


export function authenticateUser(username, password){
    return {
        type: AUTHENTICATE_USER,
        payload: { username, password }
    }
}

export function onRememberCredetialsChanged(remember){
    return {
        type: AUTHENTICATE_REMEMBER_USER,
        payload: remember
    }
}

export function onUsernameChanged(username){
    return {
        type: AUTHENTICATE_SET_USERNAME,
        payload: username
    }
}

export function onPasswordChanged(password){
    return {
        type: AUTHENTICATE_SET_PASSWORD,
        payload: password
    }
}