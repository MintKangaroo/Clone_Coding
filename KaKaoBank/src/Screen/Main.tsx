import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {color} from '../Style/color';

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
            <Text style={main_page.top_text}>지창</Text>
            <TouchableOpacity style={main_page.my_account}>
              <Text style={{color: '#BDBDBD'}}>내 계좌</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={main_page.profile_custom}></TouchableOpacity>
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
            <ScrollView
              style={{
                backgroundColor: 'white',
                borderRadius: 15,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              {/*TODO: 스크롤뷰 구현*/}
              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Text>
                  눙라ㅓㅜ아ㅓ루ㅏ너우라ㅓㅜㅇ라ㅓㅜ나ㅓ우라ㅓㅜㄴ아ㄴㅇㄹ나ㅣ으리ㅏㅡㄴ아ㅡ리느아릐으리ㅏ능리ㅏ
                </Text>
              </View>
            </ScrollView>
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
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View>
              <Text>지창이의 큰 통장</Text>
            </View>
          </View>
          <View style={{flex: 1}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flex: 15,
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 15}}>저금통</Text>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flex: 15,
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text>오소리 앱개발동아리 충학</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flex: 15,
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text>2022블레이드러너모임통장</Text>
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
