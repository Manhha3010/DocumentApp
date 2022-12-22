import {
  View,
  Text,
  SafeAreaView,
  Image,
  VirtualizedList,
  Button,
} from 'react-native';
import Artist from '../../components/Artist';
import MostPlay from '../../components/MostPlay';
import NewSong from '../../components/NewSong';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FavoriteScreen from '../FavoriteScreen';
import Suggest from '../../components/Suggest';
import {Song} from '../../components/Song';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../const/color';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Favorite');
  };
  const getItem = async () => {
    const result = await AsyncStorage.getItem('token');
    // console.log('ressulttttt', result);
    return result;
  };

  return (
    <View>
      <View style={{backgroundColor: colors.primary}}>
        <Image
          source={require('../../assets/img/logo-login-screen.png')}
          style={{width: 48, height: 48, marginLeft: 30, marginTop: 0}}
        />
      </View>
      {/* <NavBarNavigator /> */}
      <Tab.Navigator style={{flex: 1, minHeight: 1000}}>
        <Tab.Screen name="Gợi Ý" component={Suggest} />
        <Tab.Screen name="Tất cả tài liệu" component={Song} />
        <Tab.Screen name="Tài liệu của tôi" component={FavoriteScreen} />
      </Tab.Navigator>
    </View>
  );
}

export default HomeScreen;
