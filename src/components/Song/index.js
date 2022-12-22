import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useEffect, useState} from 'react';
import {fetchAll} from '../Request/http';
import Pdf from 'react-native-pdf';
import {useNavigation} from '@react-navigation/native';

export function Song() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const [fetchDataArtist, setFetchDataArtist] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchAll();
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
        onPress={() =>
          navigation.navigate('PostDetailsScreen', {
            data: item.item,
          })
        }>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View>
            <Pdf
              source={source}
              style={{
                width: 80,
                height: 80,

                marginHorizontal: 15,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: '700',
                textAlign: 'left',
                marginTop: 10,
                fontSize: 16,
                paddingTop: 12,
                marginRight: 130,
              }}>
              {item.item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{width: windowWidth, marginRight: 300}}>
      <FlatList
        data={fetchDataArtist}
        key={Math.random()}
        renderItem={renderItem}
        initialNumToRender={5}
      />
    </View>
  );
}
