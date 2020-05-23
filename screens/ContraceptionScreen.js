import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {IndexPath, Select, SelectItem} from "@ui-kitten/components";

const selectData = [
    'Оральные контроцептивы',
    'Вагинальное кольцо',
    'Гормональный пластырь',
    'Противозачаточный укол',
    'Спираль',
    'Имплант',
];

const ContraceptionScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

    const displayValue = selectData[selectedIndex.row];

    const renderOption = (title) => (
        <SelectItem title={title} key={title}/>
    );

    return (
        <View style={styles.container}>
            <Select
                label='Оповещение'
                size='large'
                placeholder='Default'
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                {selectData.map(renderOption)}
            </Select>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        minHeight: 128,
        padding: 25
    },
});

export default ContraceptionScreen
