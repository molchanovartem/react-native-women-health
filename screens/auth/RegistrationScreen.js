import React from 'react'
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import {Input, Button} from '@ui-kitten/components';
import {Ionicons} from "@expo/vector-icons";
import {Calendar, Modal, Card} from '@ui-kitten/components';
import {addUser} from "../../store/actions/authActions";
import {useDispatch} from "react-redux";

const AlertIcon = () => (
    <Ionicons name="md-alert" size={25} color={'#8f9bb3'} style={{marginRight: 5}}/>
);

const RegistrationScreen = ({navigation}) => {

    const [step, setStep] = React.useState(1);

    const [errors, setErrors] = React.useState([]);
    // const [value, setValue] = React.useState('');
    // const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const [date, setDate] = React.useState(new Date());
    const [birthday, setBirthday] = React.useState(new Date());
    const [duration, setDuration] = React.useState('5');
    const [durationCycle, setDurationCycle] = React.useState('5');

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Ionicons name={secureTextEntry ? 'ios-eye-off' : 'ios-eye'} size={25} color={'#8f9bb3'}/>
        </TouchableWithoutFeedback>
    );

    const dispatch = useDispatch();

    const saveHandler = () => {
        const user = {
            email: value,
            password: password,
            startMenstruation: date,
            birthday: birthday,
            durationMenstruation: duration,
            durationCycle: durationCycle,
        };

        dispatch(addUser(user));
        navigation.navigate("RegistrationTest");
    };

    // const nextStep = () => {
    //     if (step + 1 === 6) {
    //         saveHandler()
    //         return;
    //     }
    //     setStep(step + 1)
    // }


    const Step1 = () => {
        const [value, setValue] = React.useState('');
        const [password, setPassword] = React.useState('');


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
                setStep(step + 1)
            } else {
                setErrors(locErrors)
            }
        }

        return <View style={styles.inputContainer}>
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

            <View style={styles.bottomContent}>
                <Button onPress={nextStep} style={styles.button} title='Войти' status='primary'>
                    Далее
                </Button>
            </View>
        </View>
    }

    const Step2 = () => {
        return (
            <View style={{marginTop: -50}}>
                <Text>
                    Когда начались ваши последние месячные ?
                </Text>
                <Calendar
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
            </View>
        )
    }

    const Step3 = () => {
        const [visible, setVisible] = React.useState(false);
        return (
            <View>
                <Text>Сколько в среднем у вас длятся месячные ?</Text>
                <Text onPress={() => setVisible(true)}>Помощь</Text>
                <Input
                    value={duration}
                    textContentType='telephoneNumber'
                    keyboardType='phone-pad'
                    size='large'
                    placeholder='Длительность'
                    onChangeText={nextValue => setDuration(nextValue)}
                />

                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true}>
                        <Text>Welcome to UI Kitten </Text>
                        <Button onPress={() => setVisible(false)}>
                            DISMISS
                        </Button>
                    </Card>
                </Modal>
            </View>
        )
    }

    const Step4 = () => {
        const [visible, setVisible] = React.useState(false);
        return (
            <View>
                <Text>Сколько в среднем у вас длится цикл ?</Text>
                <Text onPress={() => setVisible(true)}>Помощь</Text>
                <Input
                    value={durationCycle}
                    textContentType='telephoneNumber'
                    keyboardType='phone-pad'
                    size='large'
                    placeholder='Длительность'
                    onChangeText={nextValue => setDurationCycle(nextValue)}
                />

                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true}>
                        <Text>Welcome to UI Kitten </Text>
                        <Button onPress={() => setVisible(false)}>
                            DISMISS
                        </Button>
                    </Card>
                </Modal>
            </View>
        )
    }

    const Step5 = () => {
        return (
            <View style={{marginTop: -50}}>
                <Text>
                    Введите дату рождения
                </Text>
                <Calendar
                    date={birthday}
                    onSelect={nextDate => setBirthday(nextDate)}
                />
            </View>
        )
    }

    const MiddleContent = () => {
        if (step === 1) return <Step1/>
        else if (step === 2) return <Step2/>
        else if (step === 3) return <Step3/>
        else if (step === 4) return <Step4/>
        else if (step === 5) return <Step5/>
    }

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.topContent}>
                <Text style={{fontSize: 20}}>Регистрация</Text>
            </View>

            <View style={styles.middleContent}>
                <MiddleContent/>
            </View>

            {/*<View style={styles.bottomContent}>*/}
            {/*    <Button onPress={nextStep} style={styles.button} title='Войти' status='primary'>*/}
            {/*        Далее*/}
            {/*    </Button>*/}
            {/*</View>*/}

        </View>

    );
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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


    container: {
        // flex: 1,
        // height: '100%',
        // justifyContent: 'center',
        // marginTop: -80
    },
    labelContent: {
        // alignItems: 'center',
    },
    labelRegistrationPos: {
        // alignItems: 'flex-end'
    },
    label: {
        fontSize: 40
    },
    inputContainer: {}
});

export default RegistrationScreen
