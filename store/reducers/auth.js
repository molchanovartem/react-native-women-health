import {LOGIN_USER, REGISTRATION_USER, REGISTRATION_AGREEMENTS, LOGOUT} from "../types";
import * as SecureStore from 'expo-secure-store';

SecureStore.getItemAsync('accessToken').then(data => initialState.accessToken = data)
SecureStore.getItemAsync('refreshToken').then(data => initialState.refreshToken = data)

const initialState = {
    accessToken: null,
    refreshToken: null,
    user: null,
    agreements: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            const {accessToken, refreshToken} = action.payload;

            return {
                ...state,
                accessToken,
                refreshToken,
            };

        case REGISTRATION_AGREEMENTS:
            const agreements = action.payload;

            return {
                ...state,
                agreements,
            };

        case REGISTRATION_USER:
            const user = action.payload;

            return {
                ...state,
                user,
                accessToken: '6666'
            };

        case LOGOUT:
            return {
                ...state,
                user: null,
                accessToken: null,
                refreshToken: null,
            };

        default:
            state;
    }

    return state
}
