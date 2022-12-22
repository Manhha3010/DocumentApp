import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import {CustomizeHeader} from '../../components/Header';

export default class PostDetailScreen extends React.Component {
  render() {
    const data = this.props.route.params.data;

    console.log('[paskd[paskd[pas]]]', data);
    const path = data.path;
    const source = {uri: 'bundle-assets://' + path + '.pdf'};
    //const source = {uri:'file:///sdcard/test.pdf'};
    //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
    //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
    //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

    return (
      <View style={styles.container}>
        <View style={{paddingHorizontal: 0}}>
          <CustomizeHeader title={data.name} isBack={true} />
        </View>
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
