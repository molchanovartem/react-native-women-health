import React from 'react'
import {View, Text, StyleSheet,} from 'react-native'
import {Button, Card, Input, Modal,} from "@ui-kitten/components";

const Step3 = ({navigation}) => {
    const [errors, setErrors] = React.useState([]);
    const [visible, setVisible] = React.useState(false);
    const [duration, setDuration] = React.useState('5');

    const nextStep = () => {
        const locErrors = []

        if (!duration) {
            locErrors.push('Введите примерную длительность месячных')
        }

        if (locErrors.length === 0) {
            navigation.navigate("RegistrationStep4");
        } else {
            setErrors(locErrors)
        }
    }

    return <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.topContent}>
            <Text style={{fontSize: 20}}>Регистрация</Text>
        </View>

        <View style={styles.middleContent}>

            {
                errors.map((elem, index) => {
                    return (<Text key={index}> {elem} </Text>)
                })
            }

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

export default Step3
