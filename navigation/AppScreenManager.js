import * as React from 'react';
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigation from "./AuthNavigation";
import {useSelector} from 'react-redux'

export default function AppScreenManager() {
    const token = useSelector(state => state.auth.token)

    return (
        <>
            {token !== null ? <BottomTabNavigator/> : <AuthNavigation/>}
        </>
    )
}
