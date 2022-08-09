import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ({ navigation }: any) {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '800',
            color: 'black',
            marginLeft: 20,
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          상품/서비스
        </Text>
      </View>
      <View>
        <Text>메뉴바</Text>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'yellow',
            height: 250,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        >
          <Text>AD</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text>예금/적금</Text>
        </View>
      </ScrollView>
    </View>
  );
}
