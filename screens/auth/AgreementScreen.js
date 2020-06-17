import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {CheckBox} from '@ui-kitten/components'
import {MiniText} from "../../components/UI/MiniText"
import {Button} from '@ui-kitten/components'
import {addAgreements} from "../../store/actions/authActions";
import {useDispatch} from "react-redux";

const AgreementScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const goRegistration = () => {
        const agreement = {
            privacy,
            personalDataProcessing,
            emailSuggestions,
            dataForPartners
        }

        dispatch(addAgreements(agreement));
        navigation.navigate("RegistrationStep1");
    };

    const [privacy, setPrivacy] = React.useState(false);
    const [personalDataProcessing, setPersonalDataProcessing] = React.useState(false);
    const [emailSuggestions, setEmailSuggestions] = React.useState(false);
    const [dataForPartners, setDataForPartners] = React.useState(false);

    const acceptAll = () => {
        setPrivacy(true)
        setPersonalDataProcessing(true)
        setEmailSuggestions(true)
        setDataForPartners(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.labelContent}>
                <Text style={styles.label}>Здравствуйте</Text>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        checked={privacy}
                        onChange={nextChecked => setPrivacy(nextChecked)}/>

                    <Text style={styles.checkboxText}>
                        Я соглашаюсь с Политикой конфиденциальности и Условиями использования
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        checked={personalDataProcessing}
                        onChange={nextChecked => setPersonalDataProcessing(nextChecked)}/>

                    <Text style={styles.checkboxText}>
                        Я соглашаюсь с обработкой персональных данных о здоровье в целях функционирования приложения.
                        Узнайте больше в Политике конфиденциальности
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        checked={emailSuggestions}
                        onChange={nextChecked => setEmailSuggestions(nextChecked)}/>

                    <Text style={styles.checkboxText}>
                        Я даю согласие на то, что MYAPP может использовать мои персональные данные (за сиключением
                        сведений о здоровье), чтобы направлять мне предложения о продуктах и услугах по электронной
                        почте,
                        через приложение MYAPP или маркетинговых партнеров. **
                    </Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        checked={dataForPartners}
                        onChange={nextChecked => setDataForPartners(nextChecked)}/>


                    <Text style={styles.checkboxText}>
                        Я соглашаюсь с тем, что MYAPP и его интегрированные партнеры могут получать мои персональные
                        данные,
                        чтобы связывать со мной и другими людьми с целью популяризации приложения MYAPP. Передаваеммые
                        данные строго ограничены: **

                        Техническими идентификаторами, Данными о возростной группе пользователя, Статусом подписки,
                        Фактом установки приложения
                    </Text>
                </View>
            </View>

            <View style={styles.bottomContent}>
                <MiniText>
                    * Вы можене отозвать свое согласие в любое время, написав письмо по адресу: support@MYAPP.helth
                </MiniText>

                <MiniText>
                    ** Опционально
                </MiniText>

                <View>
                    {
                        !privacy || !personalDataProcessing || !emailSuggestions || !dataForPartners ?
                        <Button onPress={acceptAll} style={styles.button} status='success'>
                            Принять все
                        </Button> : <MiniText/>
                    }

                    <Text>{!privacy && !personalDataProcessing}</Text>

                    <Button onPress={goRegistration} style={styles.button} disabled={!privacy || !personalDataProcessing}>
                        Далее
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 35
    },
    checkboxText: {
        paddingLeft: 10,
        fontSize: 12,
    },
    checkbox: {
        marginTop: 5,
        alignSelf: 'flex-start'
    },
    checkboxContainer: {
        marginTop: 7,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 45,
        paddingHorizontal: 35
    },
    labelContent: {
        alignItems: 'center',
    },
    label: {
        fontSize: 20
    }
});

export default AgreementScreen
