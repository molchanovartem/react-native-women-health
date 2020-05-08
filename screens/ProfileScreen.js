import * as React from 'react';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {loadProfile} from "../store/actions/profileActions";

export default function ProfileScreen() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProfile())
    }, [dispatch])

    const profileName = useSelector(state => state.profile.name)

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text>{profileName}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
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
