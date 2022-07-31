import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../Screen/Main';
import Setting from '../Screen/Setting';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: '메인',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: '설정',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
