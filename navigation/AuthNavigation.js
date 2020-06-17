import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/auth/LoginScreen'
import RegistrationScreen from '../screens/auth/RegistrationScreen'
import AgreementScreen from '../screens/auth/AgreementScreen'
import RegistrationTestScreen from '../screens/auth/RegistrationTestScreen'
import Step1 from "../screens/auth/registration/Step1";
import Step2 from "../screens/auth/registration/Step2";
import Step3 from "../screens/auth/registration/Step3";
import Step4 from "../screens/auth/registration/Step4";
import Step5 from "../screens/auth/registration/Step5";

export default function AuthNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode="null">
            <Stack.Screen
                name="Agreement"
                component={AgreementScreen}
            />
            <Stack.Screen
                name="RegistrationTest"
                component={RegistrationTestScreen}
            />
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
            <Stack.Screen
                name="RegistrationStep1"
                component={Step1}
            />
            <Stack.Screen
                name="RegistrationStep2"
                component={Step2}
            />
            <Stack.Screen
                name="RegistrationStep3"
                component={Step3}
            />
            <Stack.Screen
                name="RegistrationStep4"
                component={Step4}
            />
            <Stack.Screen
                name="RegistrationStep5"
                component={Step5}
            />
        </Stack.Navigator>
    )
}
