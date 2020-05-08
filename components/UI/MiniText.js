import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const MiniText = (props) => {
    return (
        <Text style={styles.text}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#8f9bb3',
        fontSize: 12,
        paddingVertical: 5
    },
});