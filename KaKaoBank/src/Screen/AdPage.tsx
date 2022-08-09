import React from 'react';
import { View, FlatList, Text } from 'react-native';

//스크린의 가로 세로 크기 구하는 식

import { Dimensions } from 'react-native';

const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

const Data_list = [
  { id: '1', data: '라이언' },
  { id: '2', data: '호랑이' },
  { id: '3', data: '귀여워' },
];

const Scroll_Data = ({ item }: any) => {
  return (
    <View style={{ width: Screen_Width * 0.835 }}>
      <Text style={{ fontWeight: '500' }}>{item.data}</Text>
    </View>
  );
};

export const AdPage = () => {
  return (
    <FlatList
      data={Data_list}
      renderItem={Scroll_Data}
      extraData={(item: { id: any }) => item.id}
      style={{ marginTop: 10, marginLeft: 20 }}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      /*TODO: 자동 스크롤 만들기*/
    />
  );
};
