import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useContext, useState} from 'react';

import Pdf from 'react-native-pdf';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../store/AuthContext';
import {CustomizeHeader} from '../../components/Header';

export default function HistoryScreen(props) {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const infor = useContext(AuthContext);
  const status = infor.history.length;
  console.log('item history', infor?.history);

  const renderItem = item => {
    const path = item.item.path;
    console.log('item', item.item);

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
      {/* <CustomizeHeader
        title={'Đã xem gần đây'}
        styleTitle={{marginLeft: 100}}
      /> */}
      {status === 0 ? (
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 30,
            alignSelf: 'center',
            marginTop: 200,
            paddingHorizontal: 45,
          }}>
          Gần đây bạn chưa xem bài viêt nào. Hãy thử xem một bài viết nhé!
        </Text>
      ) : (
        <FlatList
          data={infor.history}
          key={Math.random()}
          renderItem={renderItem}
          initialNumToRender={5}
        />
      )}
    </View>
  );
}
