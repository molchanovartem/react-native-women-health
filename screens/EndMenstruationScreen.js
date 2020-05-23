import React from 'react'
import {View} from 'react-native'
import RemindersItemScreen from "./RemindersItemScreen";

const EndMenstruationScreen = () => {
    return (
        <View>

            <RemindersItemScreen messageDefaultText={'Скоро конец месячных'}/>

        </View>
    );
}

export default EndMenstruationScreen
