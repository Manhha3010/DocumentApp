import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../container/LoginScreen';
import WelCome from '../container/WelcomeScreen/Welcome';
import SignUpScreen from '../container/SignUpScreen';
import HomeScreen from '../container/HomeScreen';
import {MyTabs} from './HomeNavigator';
import React, {useState} from 'react';
import {ViewAllScreen} from '../container/ViewAllScreen';
import PostDetailScreen from '../container/PostDetailScreen';
import {AuthContext} from '../store/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UnAuthen from './unAuthen';
import AuthStack from './authStack';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const [token, setToken] = useState('');

  const getToken = async () => {
    const tokenAsync = await AsyncStorage.getItem('token');
    setToken(tokenAsync);
    console.log('token asynxc', tokenAsync);
    console.log(token);
  };
  getToken();

  const userInfor = React.useContext(AuthContext);

  return userInfor.token || token ? <AuthStack /> : <UnAuthen />;
};

export default StackNavigator;
