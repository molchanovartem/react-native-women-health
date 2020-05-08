import {createStore, combineReducers} from 'redux'
import {authReducer} from './reducers/auth'
import {profileReducer} from './reducers/profile'
import {reminderReducer} from './reducers/reminder'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    reminder: reminderReducer,
})

export default createStore(rootReducer)