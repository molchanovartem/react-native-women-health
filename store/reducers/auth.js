import {LOGIN_USER} from "../types";

const initialState = {
    token: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            const token = action.payload.token;

            return {
                ...state,
                token,
            };

        default:
            state;
    }

    return state
}
