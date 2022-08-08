import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { color } from '../Style/color';
import { TextData } from '../Data/DataFile';
import { AdPage } from './AdPage';

//스크린의 가로 세로 크기 구하는 식

import { Dimensions } from 'react-native';

const Screen_Height = Dimensions.get('window').height;
const Screen_chartWidth = Dimensions.get('window').width;

const num = 100;

//TODO: setState로 Data불러오는 과정 구현

export default function ({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ ...color.main_page_back, flex: 1 }}>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            height: Screen_Height * 0.08,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={main_page.top_text}>{TextData.UserData.name}</Text>
            <TouchableOpacity style={main_page.my_account}>
              <Text style={{ color: '#BDBDBD' }}>내 계좌</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Icon name="person-circle" size={45} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              height: Screen_Height * 0.07,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 1 }} />
            <View
              style={{ flex: 15, backgroundColor: 'white', borderRadius: 10 }}
            >
              <AdPage />
            </View>

            <View style={{ flex: 1 }} />
          </View>
          <View
            style={{
              height: Screen_Height * 0.25,
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 1 }} />
            <View
              style={{
                flex: 15,
                backgroundColor: '#A9F5F2',
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ fontWeight: '600' }}>{TextData.Account[1]}</Text>
                <Text style={{ fontSize: 13, fontWeight: '400' }}>
                  {TextData.Account_Num[1]}
                </Text>
                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 25, fontWeight: '600' }}>
                    {TextData.Rest_Money[1]}원
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <View />
                  <Text style={{ fontWeight: '500' }}>이체</Text>
                  <Text style={{ color: 'grey', opacity: 0.3 }}>ㅣ</Text>
                  <Text style={{ fontWeight: '500' }}>카드이용내역</Text>
                  <View />
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <View style={{ height: Screen_Height * 0.073, flexDirection: 'row' }}>
            <View style={{ flex: 1 }} />
            <View
              style={{
                flex: 15,
                backgroundColor: '#A9F5F2',
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 20,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: '500' }}>
                  {TextData.Account[2]}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <View style={{ height: Screen_Height * 0.15, flexDirection: 'row' }}>
            <View style={{ flex: 1 }} />
            <View
              style={{
                flex: 15,
                backgroundColor: '#819FF7',
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ fontWeight: '500' }}>{TextData.Account[3]}</Text>
                <Text style={{ fontSize: 13, fontWeight: '400' }}>
                  {TextData.Account_Num[3]}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <View style={{ height: Screen_Height * 0.15, flexDirection: 'row' }}>
            <View style={{ flex: 1 }} />
            <View
              style={{
                flex: 15,
                backgroundColor: '#C97777',
                borderRadius: 10,
                marginTop: 15,
              }}
            >
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ fontWeight: '500' }}>{TextData.Account[4]}</Text>
                <Text style={{ fontSize: 13, fontWeight: '400' }}>
                  {TextData.Account_Num[4]}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

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
});
