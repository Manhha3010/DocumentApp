import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../container/LoginScreen';
import WelCome from '../container/WelcomeScreen/Welcome';
import SignUpScreen from '../container/SignUpScreen';
import HomeScreen from '../container/HomeScreen';
import {MyTabs} from './HomeNavigator';
import React from 'react';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />  */}
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerBackVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen name="Welcome" component={WelCome} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
