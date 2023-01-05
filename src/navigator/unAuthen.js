import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../container/LoginScreen';
import WelCome from '../container/WelcomeScreen/Welcome';
import SignUpScreen from '../container/SignUpScreen';
import {MyTabs} from './HomeNavigator';
import HomeScreen from '../container/HomeScreen';
import PostDetailScreen from '../container/PostDetailScreen';

const Stack = createNativeStackNavigator();
const UnAuthen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelCome} />
      <Stack.Screen
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
      />
    </Stack.Navigator>
  );
};

export default UnAuthen;
