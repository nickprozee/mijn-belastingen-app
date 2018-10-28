import * as ACTIONTYPES from '../Actions/keyboardActions';


const default_state = { 
    isOpen: false 
}


export function keyboardReducer(state = default_state, action) {

    switch (action.type) {

        case ACTIONTYPES.KEYBOARD_BROUGHT_INTO_VIEW:
        case ACTIONTYPES.KEYBOARD_DISMISSED_FROM_VIEW:

            return action.payload;

        default:

            return state;
    }
}