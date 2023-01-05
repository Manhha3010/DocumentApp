import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import ButtonBig from '../../components/ButtonBig/ButtonBig';
import {AuthContext} from '../../store/AuthContext';

function PlaylistScreen() {
  const userInfor = useContext(AuthContext);
  const onPressLogOut = async () => {
    userInfor.setToken(null);
    await AsyncStorage.setItem('token', '');
    console.log('userinfro', userInfor);
  };
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity onPress={onPressLogOut}>
        <ButtonBig text={' Đăng xuất '} />
      </TouchableOpacity>
      <View></View>
    </SafeAreaView>
  );
}

export default PlaylistScreen;
