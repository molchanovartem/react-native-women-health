import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native';
import {IndexPath, Input, Select, SelectItem} from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import {MiniText} from "../components/UI/MiniText";

const selectData = [
    '1 день до',
    '2 дня до',
    'Неделя до',
];

const RemindersItemScreen = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const [value, setValue] = useState(props.messageDefaultText);

    const [time, setDate] = useState(new Date(1598051730000));
    const [timeInput, setTimeInput] = useState('10:00');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || time;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setTimeInput(currentDate.toISOString().substr(11, 5));
    };

    const displayValue = selectData[selectedIndex.row];

    const renderOption = (title) => (
        <SelectItem title={title} key={title}/>
    );

    const showTimePicker = () => {
        setShow(true)
    }

    return (
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>

            <Select
                label='Оповещение'
                size='large'
                placeholder='Default'
                value={displayValue}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                {selectData.map(renderOption)}
            </Select>

            <Input
                size='large'
                label='Сообщение'
                placeholder='Введите сообщение'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                style={styles.input}
            />

            <View>
                <MiniText>Время напоминания</MiniText>
                <Text style={styles.timeInput} onPress={showTimePicker}>
                    {timeInput}
                </Text>
            </View>

            <View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={time}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    timeLabel: {
        color: '#8f9bb3',
        fontSize: 12,
        paddingVertical: 5
    },
    timeInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#e4e9f2',
        padding: 15,
        borderRadius: 5
    },
    input: {
        marginTop: 15
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        minHeight: '100%',
        padding: 25
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});

export default RemindersItemScreen
