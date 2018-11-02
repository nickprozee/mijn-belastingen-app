import * as UserTypes from '../Actions/userActions';

const default_state = {

    name: undefined

}

export function userReducer(state = default_state, action) {

    switch (action.type) {
        case UserTypes.SET_USER:
            return action.payload;

        default:
            return state;
    }

}