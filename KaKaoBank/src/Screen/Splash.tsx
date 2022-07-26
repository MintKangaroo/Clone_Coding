import React from 'react';
import {View, Text, Button} from 'react-native';
import style from '../Style/style';

export default ({navigation}: any) => {
  return (
    <View style={style.spash_style}>
      <Text>Splash</Text>
      <Button title="go to main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};
