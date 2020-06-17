import React from 'react'
import {View, Text, StyleSheet,} from 'react-native'
import {Button, Calendar, Card, Input, Modal,} from "@ui-kitten/components";

const Step5 = ({navigation}) => {
    const [errors, setErrors] = React.useState([]);
    const [birthday, setBirthday] = React.useState(new Date("2000-01-26"));

    const nextStep = () => {
        const locErrors = []

        if (locErrors.length === 0) {
            navigation.navigate("RegistrationTest");
        } else {
            setErrors(locErrors)
        }
    }

    return <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.topContent}>
            <Text style={{fontSize: 20}}>Регистрация</Text>
        </View>

        <View style={styles.middleContent}>
            <View style={{marginTop: -50}}>
                <Text>
                    Введите дату рождения
                </Text>
                <Calendar
                    min={new Date('1930-01-01')}
                    max={new Date('9999-12-31')}
                    date={birthday}
                    onSelect={nextDate => setBirthday(nextDate)}
                />
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

export default Step5
