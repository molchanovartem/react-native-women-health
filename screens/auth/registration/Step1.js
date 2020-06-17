import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {Button, Input} from "@ui-kitten/components";
import {Ionicons} from "@expo/vector-icons";

const AlertIcon = () => (
    <Ionicons name="md-alert" size={25} color={'#8f9bb3'} style={{marginRight: 5}}/>
);

const Step1 = ({navigation}) => {
    const [value, setValue] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState([]);
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const nextStep = () => {
        const locErrors = []
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(value) === false) {
            locErrors.push('Email не корректный')
        }

        if (password.length < 6) {
            locErrors.push('Пароль должен содержать минимум 6 символов')
        }

        if (locErrors.length === 0) {
            navigation.navigate("RegistrationStep2");
        } else {
            setErrors(locErrors)
        }
    }

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = () => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Ionicons name={secureTextEntry ? 'ios-eye-off' : 'ios-eye'} size={25} color={'#8f9bb3'}/>
        </TouchableWithoutFeedback>
    );

    return <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.topContent}>
                <Text style={{fontSize: 20}}>Регистрация</Text>
            </View>

            <View style={styles.middleContent}>
                <View style={styles.inputContainer}>
                    {
                        errors.map((elem, index) => {
                            return (<Text key={index}> {elem} </Text>)
                        })
                    }
                    <Input
                        value={value}
                        size='large'
                        label='Email'
                        placeholder='Ваш email'
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
                    <View style={styles.labelRegistrationPos}>
                        <Text onPress={() => navigation.navigate("Login")} style={styles.loginLink}>Вход</Text>
                    </View>
                </View>



            </View>

            <View style={styles.bottomContent}>
                <Button onPress={nextStep} style={styles.button} title='Войти' status='primary'>
                    Далее
                </Button>
            </View>

        </View>
}

const styles = StyleSheet.create({
    labelRegistrationPos: {
        alignItems: 'flex-end',
        padding: 15,
    },
    loginLink: {
        color: '#3366ff'
    },
    topContent: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    bottomContent: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff'
    },
    middleContent: {
        flex: 7,
        backgroundColor: '#ffffff',
        paddingHorizontal: 25,
        paddingTop: '40%',
        alignItems: 'center',
    },
    button: {
        width: '100%'
    },
    inputContainer: {}
});

export default Step1
