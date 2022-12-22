import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';

import StackNavigator from './src/navigator/StackNavigator';

import UnAuthen from './src/navigator/unAuthen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageSession} from './src/utils/StorageSession';

const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState('');
  // TrackPlayer.registerPlaybackService(() => require('./service').default);
  // Ionicons.loadFont().then();
  // MaterialCommunityIcons.loadFont().then();
  useEffect(() => {
    const getItem = async () => {
      const result = await AsyncStorage.getItem('token');
      setToken(result);
      StorageSession.token = result;
      console.log('result la appp', result);
      console.log('sesss', StorageSession.token);
    };
    getItem();
  }, []);

  return (
    <NavigationContainer>
      {/* <UnAuthen /> */}
      {/* <StackNavigator /> */}
      {token ? <StackNavigator /> : <UnAuthen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
