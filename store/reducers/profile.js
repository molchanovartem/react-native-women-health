import {LOAD_PROFILE_DATA} from "../types";

const initialState = {
    name: '',
    appPass: '',
    statistic: {},
    startScreen: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PROFILE_DATA:
            return {
                ...state,
                name: action.payload.name,
                appPass: action.payload.appPass,
                statistic: action.payload.statistic,
            }
        default:
            return state
    }
}
