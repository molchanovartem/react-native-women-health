import React from 'react'
import {View} from 'react-native'
import RemindersItemScreen from "./RemindersItemScreen";

const StartMenstruationScreen = () => {
    return (
        <View>

            <RemindersItemScreen messageDefaultText={'Скоро начало месячных'}/>

        </View>
    );
}

export default StartMenstruationScreen