import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';

export default function CalendarScreen() {
    return (
        <View style={styles.container}>
            <CalendarList
                onVisibleMonthsChange={(months) => {
                    console.log('now these months are visible', months);
                }}
                pastScrollRange={50}
                futureScrollRange={50}
                scrollEnabled={true}
                showScrollIndicator={true}
            />
        </View>
    );
}

CalendarScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
