import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from '../Screen/Main';
import Setting from '../Screen/Setting';
import Menu from '../Screen/Menu';
import Notification from '../Screen/Notification';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{tabBarShowLabel: false, tabBarStyle: {height: 80}}}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="person" color={'black'} size={25} />
              ) : (
                <Icon name="person" color={'grey'} size={25} />
              ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="grid" color={'black'} size={25} />
              ) : (
                <Icon name="grid" color={'grey'} size={25} />
              ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="notifications" color={'black'} size={25} />
              ) : (
                <Icon name="notifications" color={'grey'} size={25} />
              ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon name="ellipsis-horizontal" color={'black'} size={25} />
              ) : (
                <Icon name="ellipsis-horizontal" color={'grey'} size={25} />
              ),
          }}
        />
        {/*TODO: 새로운 Screen 추가될 때 여기에 Route 입력*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
