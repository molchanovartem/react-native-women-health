import * as React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useLinking} from "@react-navigation/native";
import BottomTabNavigator from "../navigation/BottomTabNavigator";
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainScreen() {
    const [initialNavigationState, setInitialNavigationState] = React.useState();

    const containerRef = React.useRef();
    const {getInitialState} = useLinking(React.useRef());

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                setInitialNavigationState(await getInitialState());
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>

                <Stack.Navigator>
                    <Stack.Screen name="Root" component={BottomTabNavigator}/>
                </Stack.Navigator>

            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },

    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});
