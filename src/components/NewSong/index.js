import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import {colors} from '../../const/color';
import {useEffect, useState} from 'react';
import {fecthMostView} from '../Request/http';
import React from 'react';
import Pdf from 'react-native-pdf';
import {useNavigation} from '@react-navigation/native';

export default function NewSong(props) {
  const [fetchDataArtist, setFetchDataArtist] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      const data = await fecthMostView();
      setFetchDataArtist(data);
    }
    fetchData();

    // upArtist(post);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = item => {
    const path = item.item.path;
    const source = {uri: 'bundle-assets://' + path + '.pdf'};
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() =>
          navigation.navigate('PostDetailsScreen', {
            data: item.item,
          })
        }>
        <Pdf
          source={source}
          style={{
            width: 150,
            height: 150,

            marginHorizontal: 15,
            marginTop: 10,
          }}
        />
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 10,
            width: 150,
          }}>
          {item.item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          paddingVertical: 10,
        }}>
        <Text style={{fontWeight: '700', fontSize: 20, left: 0}}>
          Tài liệu mới
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.primary,
              fontWeight: '700',
              fontSize: 16,
            }}></Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={fetchDataArtist}
        key={Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
