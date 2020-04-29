import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import CalendarScreen from '../screens/CalendarScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Calendar';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: 'Календарь',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-calendar" />,
        }}
      />
      <BottomTab.Screen
        name="Today"
        component={LinksScreen}
        options={{
          title: 'Сегодня',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-flower" />,
        }}
      />
      <BottomTab.Screen
        name="Reminders"
        component={LinksScreen}
        options={{
          title: 'Напоминания',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-notifications-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={LinksScreen}
        options={{
          title: 'Профиль',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-heart-empty" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Calendar':
      return 'Календарь';
    case 'Today':
      return 'Сегодня';
    case 'Reminders':
      return 'Напоминания';
    case 'Profile':
      return 'Профиль';
  }
}
