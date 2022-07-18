import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.hello}>Hello</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    fontSize: 40,
  },
});

export default MainScreen;
