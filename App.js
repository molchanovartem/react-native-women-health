import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {default as mapping} from './mapping.json';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import AuthNavigation from './navigation/AuthNavigation';
import useLinking from './navigation/useLinking';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import {Provider} from 'react-redux'
import store from './store'
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppScreenManager from "./navigation/AppScreenManager";

/**
 * @return {null}
 * @return {null}
 */

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const {getInitialState} = useLinking(containerRef);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <>
                <IconRegistry icons={EvaIconsPack}/>
                <Provider store={store}>
                    <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
                        <View style={styles.container}>
                            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>

                                {/*{false ? <BottomTabNavigator/> : <AuthNavigation/>}*/}

                                <AppScreenManager />

                            </NavigationContainer>

                        </View>
                    </ApplicationProvider>
                </Provider>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
