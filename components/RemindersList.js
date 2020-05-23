import React from 'react';
import { Button, Icon, List, ListItem, Toggle  } from '@ui-kitten/components';
import { StyleSheet, Text } from 'react-native';
import {ToggleSimple} from './UI/ToggleSimple'



const data = [
    {
        title: 'Начало месячных',
        description: '10:00',
        checked: true,
        screen: 'Start menstruation',
    },
    {
        title: 'Окончание месячных',
        description: 'Description for Item',
        checked: false,
        screen: 'End menstruation',
    },
    {
        title: 'Овуляция',
        description: 'Description for Item',
        checked: false,
        screen: 'Ovulation',
    },
    {
        title: 'Прием контрацепции',
        description: 'Description for Item',
        checked: false,
        screen: 'Contraception',
    }
];

export const RemindersList = ({props}) => {

    const renderItem = ({ item, index }) => (
        <ListItem
            title={item.title}
            onPress={() => props.navigation.navigate(item.screen)}
            description={() => item.checked ? <Text>{item.description}</Text> : <Text>Выключено</Text>}
            accessoryRight={() => <ToggleSimple checked={item.checked}/>}
        />
    );

    return (
        <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    container: {},
});