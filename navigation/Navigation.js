import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CalendarScreen from "../screens/CalendarScreen";
import TabBarIcon from "../components/TabBarIcon";
import TodayScreen from "../screens/TodayScreen";
import RemindersScreen from "../screens/RemindersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import {useSelector} from "react-redux";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


function BottomNav() {
    return (
        <BottomTab.Navigator>
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
                component={RemindersScreen}
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


export const AppNavigation = () => {
    const startScreen = useSelector(state => state.profile.startScreen)

    const INITIAL_ROUTE_NAME = startScreen ? 'Start' : 'Calendar';

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>

                {/*    <Stack.Screen name="Start" children={TodayScreen}/>*/}
                <Stack.Screen name="Root" children={BottomNav}/>
            </Stack.Navigator>


        </NavigationContainer>
    );
};
