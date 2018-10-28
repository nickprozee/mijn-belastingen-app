export const AUTHENTICATE_USER = 'authentication:authenticateUser';
export const AUTHENTICATE_USER_START = 'authentication:authenticateUser_START';
export const AUTHENTICATE_USER_SUCCES = 'authentication:authenticateUser_SUCCESS';
export const AUTHENTICATE_USER_FAILED = 'authentication:authenticateUser_FAILED';
export const AUTHENTICATE_REMEMBER_USER = 'authentication:setRememberCredentials';
export const AUTHENTICATE_SET_USERNAME = 'authentication:setUsername';
export const AUTHENTICATE_SET_PASSWORD = 'authentication:setPassword';


export function authenticateUser(username, password) {
    console.log("AUTH USER INIT");
    return (dispatch) => {
        console.log("AUTH USER IN DISPATCH")
        dispatch(dispatchAuthenticateUser(AUTHENTICATE_USER_START));

        let validLogin = username && (username == password);

        if (validLogin) {
            setTimeout(() =>
                dispatch(dispatchAuthenticateUser(AUTHENTICATE_USER_SUCCES, { authKey: '123123' }))
                , 3000);
        }
        else
            dispatch(dispatchAuthenticateUser(AUTHENTICATE_USER_FAILED, "Onbekende gebruikersnaam en/of wachtwoord"));
    }
}

function dispatchAuthenticateUser(type, payload) {
    return {
        type,
        payload
    }
}

export function onRememberCredetialsChanged(remember) {
    return {
        type: AUTHENTICATE_REMEMBER_USER,
        payload: remember
    }
}

export function onUsernameChanged(username) {
    return {
        type: AUTHENTICATE_SET_USERNAME,
        payload: username
    }
}

export function onPasswordChanged(password) {
    return {
        type: AUTHENTICATE_SET_PASSWORD,
        payload: password
    }
}