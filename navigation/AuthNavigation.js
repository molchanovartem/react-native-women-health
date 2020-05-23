import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/auth/LoginScreen'
import RegistrationScreen from '../screens/auth/RegistrationScreen'

export default function AuthNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode="null">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'Вход',
                }}
            />
            <Stack.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{
                    title: 'Регистрация',
                }}
            />
        </Stack.Navigator>
    )
}
