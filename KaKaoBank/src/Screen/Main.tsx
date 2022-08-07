import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {color} from '../Style/color';
import {TextData} from '../Data/DataFile';
import {AdPage} from './AdPage';

const num = 100;

export default ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{...color.main_page_back, flex: 1}}>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={main_page.top_text}>{TextData.UserData.name}</Text>
            <TouchableOpacity style={main_page.my_account}>
              <Text style={{color: '#BDBDBD'}}>내 계좌</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={main_page.profile_custom}>
              <Icon name="person-circle" size={38}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}} />
          <View style={{flex: 15}}>
            <AdPage />
          </View>

          <View style={{flex: 1}} />
        </View>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}} />
          <View
            style={{
              flex: 15,
              backgroundColor: '#A9F5F2',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View>
              <Text>{TextData.Account[1]}</Text>
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flex: 15,
              backgroundColor: '#A9F5F2',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 15}}>{TextData.Account[2]}</Text>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flex: 15,
              backgroundColor: '#819FF7',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text>{TextData.Account[3]}</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flex: 15,
              backgroundColor: '#C97777',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text>{TextData.Account[4]}</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const main_page = StyleSheet.create({
  top_text: {
    color: 'white',
    fontSize: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  my_account: {
    width: 55,
    height: 30,
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
