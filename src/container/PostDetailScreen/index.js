import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {CustomizeHeader} from '../../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../const/color';
import {AuthContext} from '../../store/AuthContext';

export default function PostDetailScreen(props) {
  const data = props.route.params.data;
  const infor = useContext(AuthContext);
  console.log('[paskd[paskd[pas]]]', data);
  const path = data.path;
  const source = {uri: 'bundle-assets://' + path + '.pdf'};
  const status = infor.favorite.includes(data.path);

  useEffect(() => {
    console.log('list history', infor.idHistory);
    if (infor.idHistory.includes(data.path)) {
      console.log('da co trong history');
    } else {
      infor.addIdHistory(data.path);
      infor.addHistory(data);
      console.log('them vao history');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onPressFavorite = () => {
    const obj = {
      name: data.name,
      path: data.path,
    };
    if (infor.favorite.includes(obj.path)) {
      infor.removeFavorite(obj.path);
      infor.removeItemFavorite(obj);
      Alert.alert('Đã bỏ yêu thích bài viết ');
    } else {
      infor.addFavorite(obj.path);
      infor.addItemFavorite(obj);
      Alert.alert('Đã yêu thích bài viết');
    }
    console.log('first', infor.favorite);
    console.log('list favoriet', infor.itemFavorite);
  };
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 0}}>
        <CustomizeHeader title={data.name} isBack={true} />
      </View>
      <TouchableOpacity onPress={onPressFavorite}>
        <MaterialCommunityIcons
          name={status ? 'heart-circle' : 'heart-circle-outline'}
          size={48}
          color={colors.primary}
        />
      </TouchableOpacity>
      <Pdf
        source={source}
        // onLoadComplete={(numberOfPages, filePath) => {
        //   console.log(`Number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page, numberOfPages) => {
        //   console.log(`Current page: ${page}`);
        // }}
        // onError={error => {
        //   console.log(error);
        // }}
        // onPressLink={uri => {
        //   console.log(`Link pressed: ${uri}`);
        // }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
