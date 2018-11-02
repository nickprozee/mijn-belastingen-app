import * as ACTIONTYPES from '../Actions/screenActions';

const default_state = {
    showFullContent: true
}

export function screenReducer(state = default_state, action) {
    switch (action.type) {

        case ACTIONTYPES.SET_FULL_CONTENT:

            return { showFullContent: action.payload }

        default:

            return state;
    }
}