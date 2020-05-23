import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Button } from '@ui-kitten/components';

export default function TodayScreen({navigation}) {
  const openPostHandler = () => {
    navigation.navigate("Root");
  };
  return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1" style={styles.tab}>
          <Text>First page</Text>
        </View>
        <View key="2" style={styles.tab}>
          <Text>Second page</Text>
          <Button style={styles.button} status='success' onPress={openPostHandler}>
            SUCCESS
          </Button>
        </View>
      </ViewPager>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },

  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },

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
