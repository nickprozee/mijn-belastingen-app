import * as ACTIONTYPES from '../Actions/navigationActions';
import { screens } from '../AppNavigator';

const default_state = {
    screen: screens.Dashboard
}

export function navigationReducer(state = default_state, action) {
    switch (action.type) {

        case ACTIONTYPES.NAVIGATION_NAVIGATE_TO_DASHBOARD:

            return {
                screen: screens.Dashboard
            };

        case ACTIONTYPES.NAVIGATION_NAVIGATE_TO_LOGIN:

            return {
                screen: screens.Login
            };

        default:

            return state;
    }
}