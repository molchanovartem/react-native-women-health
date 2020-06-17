import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import ViewPager from "@react-native-community/viewpager";
import {Button, Input} from "@ui-kitten/components";

const AlertIcon = () => (
    <Ionicons name="md-alert" size={25} color={'#8f9bb3'} style={{marginRight: 5}}/>
);

const RegistrationTestScreen = ({navigation}) => {
    const registerUser = () => {

    }

    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            <View key="1" style={styles.tab}>
                <Text>Будь уверена в себе каждый день</Text>
                <Text>MYAPP с высочайшей вероятностью прогнозирует первый день месячных</Text>
            </View>

            <View key="2" style={styles.tab}>
                <Text>Знай себя и свое тело</Text>
                <Text>Более 1000 статей о здоровье, отношениях и образе жизни, проверенных экспертами в своей области</Text>
            </View>

            <View key="3" style={styles.tab}>
                <Text>Здесь вы можете говорить обо всем!</Text>
                <Text>MYAPP - это более 80 миллионов женщин, готовых поддержать друг друга и поделиться своими историями</Text>


                <Button onPress={registerUser}  title='Завершить регистрацию' status='primary'>
                    Завершить регистрацию
                </Button>

            </View>
        </ViewPager>
    );
}

const styles = StyleSheet.create({
    tab: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewPager: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

export default RegistrationTestScreen
