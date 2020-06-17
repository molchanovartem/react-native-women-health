import axiosInstance from '../../api/axiosInstance';
import {LOGIN_USER, REGISTRATION_USER, REGISTRATION_AGREEMENTS, LOGOUT} from "../types";
import * as SecureStore from 'expo-secure-store';

export function addUser(user) {
    return { type: REGISTRATION_USER, payload: user }
}

export function addAgreements(agreements) {
    return { type: REGISTRATION_AGREEMENTS, payload: agreements }
}

export const loginUser = ({email, password}) => async dispatch => {
    try {
        const res = await axiosInstance({
            url: 'signin',
            method: 'post',
            data: {
                email,
                password,
            },
        });

        await SecureStore.setItemAsync('accessToken', res.accessToken)
        await SecureStore.setItemAsync('refreshToken', res.refreshToken)

        dispatch({ type: LOGIN_USER, payload: res });

        return res
    } catch (e) {
        throw e;
    }
};

export const logout = () => async dispatch => {
    try {
        await SecureStore.deleteItemAsync('accessToken')
        await SecureStore.deleteItemAsync('refreshToken')

        dispatch({ type: LOGOUT });
    } catch (e) {
        throw e;
    }
};
