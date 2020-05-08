import {LOAD_PROFILE_DATA} from "../types";

const data = {
    name: 'artem',
    appPass: '',
    statistic: {}
}

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE_DATA,
        payload: data
    }
}