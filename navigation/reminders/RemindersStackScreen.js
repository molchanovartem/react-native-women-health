import * as React from 'react';
import RemindersScreen from "../../screens/RemindersScreen";
import RemindersItemScreen from "../../screens/RemindersItemScreen";
import StartMenstruationScreen from "../../screens/StartMenstruationScreen";
import {createStackNavigator} from "@react-navigation/stack";
import EndMenstruationScreen from "../../screens/EndMenstruationScreen";
import OvulationScreen from "../../screens/OvulationScreen";

export default function RemindersStackScreen() {
    const RemindersStack = createStackNavigator();

    return (
        <RemindersStack.Navigator>
            <RemindersStack.Screen
                name="Home"
                component={RemindersScreen}
                options={{
                    title: 'Напоминания',
                }}
            />
            <RemindersStack.Screen
                name="Start menstruation"
                component={StartMenstruationScreen}
                options={{
                    title: 'Начало месячных',
                }}
            />
            <RemindersStack.Screen
                name="End menstruation"
                component={EndMenstruationScreen}
                options={{
                    title: 'Окончание месячных',
                }}
            />
            <RemindersStack.Screen
                name="Ovulation"
                component={OvulationScreen}
                options={{
                    title: 'Овуляция',
                }}
            />
        </RemindersStack.Navigator>
    );
}