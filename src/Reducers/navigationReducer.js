import * as ACTIONTYPES from '../Actions/navigationActions';
import Login from '../Views/Login';

const default_state = {
    screen: Login,
}

export function navigationReducer(state = default_state, action) {
    switch (action.type) {

        case ACTIONTYPES.NAVIGATION_NAVIGATE_TO_SCREEN:
            return {
                ...state,
                screen: action.payload
            };

        default:

            return state;
    }
}