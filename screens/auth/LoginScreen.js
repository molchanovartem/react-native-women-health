import React from 'react'
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import {Input, Button} from '@ui-kitten/components';
import {Ionicons} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/authActions";

const AlertIcon = () => (
    <Ionicons name="md-alert" size={25} color={'#8f9bb3'} style={{marginRight: 5}} />
);

const LoginScreen = ({navigation}) => {
    const [value, setValue] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const dispatch = useDispatch();

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Ionicons name={secureTextEntry ? 'ios-eye-off' : 'ios-eye'} size={25} color={'#8f9bb3'}/>
        </TouchableWithoutFeedback>
    );

    const goRegistration = () => {
        navigation.navigate("Registration");
    };

    const loginHandler = () => {
        const token = {
            token: '654864'
        };

        dispatch(loginUser(token));
    };

    return (
        <View style={styles.container}>
            <View style={styles.labelContent}>
                <Text style={styles.label}>Вход</Text>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <Input
                        value={value}
                        size='large'
                        label='Телефон'
                        keyboardType='phone-pad'
                        placeholder='Вош телефон'
                        onChangeText={nextValue => setValue(nextValue)}
                    />

                    <Input
                        style={{marginTop: 15}}
                        value={password}
                        size='large'
                        label='Пароль'
                        placeholder='Ваш пароль'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={nextValue => setPassword(nextValue)}
                    />
                </View>
            </View>

            <View style={styles.labelRegistrationPos}>
                <Text onPress={goRegistration} style={styles.labelRegistration}>Регистрация</Text>
            </View>

            <View style={styles.labelContent}>
                <Button onPress={loginHandler} style={styles.button} title='Войти' status='primary'>
                    Войти
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default LoginScreen
