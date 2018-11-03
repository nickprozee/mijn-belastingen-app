import * as authenticationActions from '../Actions/AuthenticationActions';

export function logoutUser() {
    return (dispatch) => {

        dispatch(authenticationActions.setIsAuthenticating(true));

        setTimeout(() => {
            dispatch(authenticationActions.logoffUser());
            dispatch(authenticationActions.setIsAuthenticating(false));
        }, 3000);
    }
}