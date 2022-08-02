import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {color} from '../Style/color';

export default ({navigation}: any) => {
  return (
    <View style={{...color.main_page_back, flex: 1}}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={main_page.top_text}>지창</Text>
          <TouchableOpacity style={main_page.my_account}>
            <Text>내 계좌</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={main_page.profile_custom}></TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 9}}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

const main_page = StyleSheet.create({
  top_text: {
    fontSize: 25,
    marginRight: 10,
  },
  my_account: {
    width: 55,
    height: 35,
    borderRadius: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_custom: {
    width: 35,
    height: 35,
    backgroundColor: 'grey',
    borderRadius: 35,
    marginRight: 10,
  },
});
