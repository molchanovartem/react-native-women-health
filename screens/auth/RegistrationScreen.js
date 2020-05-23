import React from 'react'
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import {Input, Button} from '@ui-kitten/components';
import {Ionicons} from "@expo/vector-icons";
import ViewPager from '@react-native-community/viewpager';

const AlertIcon = () => (
    <Ionicons name="md-alert" size={25} color={'#8f9bb3'} style={{marginRight: 5}}/>
);

const RegistrationScreen = ({navigation}) => {

    const [value, setValue] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Ionicons name={secureTextEntry ? 'ios-eye-off' : 'ios-eye'} size={25} color={'#8f9bb3'}/>
        </TouchableWithoutFeedback>
    );

    const goLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            <View key="1" style={styles.container}>
                <View style={styles.labelContent}>
                    <Text style={styles.label}>Регистрация</Text>
                </View>
                <View>
                    <View style={styles.inputContainer}>
                        <Input
                            value={value}
                            textContentType='telephoneNumber'
                            keyboardType='phone-pad'
                            size='large'
                            label='Телефон'
                            placeholder='Вош телефон'
                            onChangeText={nextValue => setValue(nextValue)}
                        />

                        <Input
                            style={{marginTop: 15}}
                            value={password}
                            size='large'
                            label='Пароль'
                            placeholder='Ваш пароль'
                            caption='Пароль должен содержать минимум 6 символов'
                            accessoryRight={renderIcon}
                            captionIcon={AlertIcon}
                            secureTextEntry={secureTextEntry}
                            onChangeText={nextValue => setPassword(nextValue)}
                        />
                    </View>
                </View>

                <View style={styles.labelRegistrationPos}>
                    <Text onPress={goLogin} style={styles.labelRegistration}>Логин</Text>
                </View>

                <View style={styles.labelContent}>
                    <Button style={styles.button} title='Войти' status='primary'>
                        Регистрация
                    </Button>
                </View>
            </View>

            <View key="2" style={styles.tab}>
                <Text>Second page</Text>

            </View>
        </ViewPager>
    );
}

const styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewPager: {
        flex: 1,backgroundColor: '#ffffff',
    },
    labelRegistration: {
        color: '#3366ff'
    },
    button: {
        margin: 2,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginTop: -80
    },
    labelContent: {
        alignItems: 'center',
    },
    labelRegistrationPos: {
        alignItems: 'flex-end',
        padding: 15,
    },
    label: {
        fontSize: 40
    },
    inputContainer: {
        padding: 15,
        paddingTop: 50
    }
});

export default RegistrationScreen
