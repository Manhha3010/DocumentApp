import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StorageSession} from '../../utils/StorageSession';

function SettingScreen() {
  const navigation = useNavigation();
  const logOut = async () => {
    console.log('aaaa');
    await AsyncStorage.removeItem('token');
    const res = await AsyncStorage.getItem('token');
    console.log('res dajodj', res);
    navigation.navigate('WelCome');
    StorageSession.token = '';
  };
  return (
    <SafeAreaView>
      <View>
        <Text>PlaylistScreenabbasdp</Text>
      </View>
      <View></View>
      <TouchableOpacity
        onPress={logOut}
        style={{
          backgroundColor: '#ccc',
          width: 100,
          height: 100,
        }}></TouchableOpacity>
    </SafeAreaView>
  );
}

export default SettingScreen;
