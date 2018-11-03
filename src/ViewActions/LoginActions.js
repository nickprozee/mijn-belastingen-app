import * as userActions from '../Actions/UserActions';
import * as authenticationActions from '../Actions/AuthenticationActions';

export function authenticateUser(username, password) {
    let validLogin = username && (username == password);

    return (dispatch) => {

        dispatch(authenticationActions.authenticateUser(authenticationActions.AUTHENTICATE_USER_START));

        if (validLogin)
            setTimeout(() => {
                dispatch(userActions.setUser({ name: username }));
                dispatch(authenticationActions.authenticateUser(authenticationActions.AUTHENTICATE_USER_SUCCES, { authKey: '123123' }));
                
            }, 500)

        else
            dispatch(authenticationActions.authenticateUser(authenticationActions.AUTHENTICATE_USER_FAILED, "Onbekende gebruikersnaam en/of wachtwoord"));
    }
}


