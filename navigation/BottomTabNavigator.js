import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import CalendarScreen from '../screens/CalendarScreen';
import TodayScreen from '../screens/TodayScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RemindersStackScreen from "./reminders/RemindersStackScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Calendar';

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    title: 'Календарь',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-calendar"/>,
                }}
            />

            <BottomTab.Screen
                name="Today"
                component={TodayScreen}
                options={{
                    title: 'Сегодня',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-flower"/>,
                }}
            />

            <BottomTab.Screen
                name="Reminders"
                component={RemindersStackScreen}
                options={{
                    title: 'Напоминания',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-notifications-outline"/>,
                }}
            />

            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Профиль',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="ios-heart-empty"/>,
                }}
            />

        </BottomTab.Navigator>
    );
}
