import React from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../const/color';

export const CustomizeHeader = props => {
  const navigation = useNavigation();
  const {title, style, isBack, isEdit, isBorder, styleTitle} = props;
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={[styles.container, style]}>
        <View style={styles.inforContainer}>
          {isBack ? (
            <View style={{flex: 2, marginLeft: 50}}>
              <View style={{width: '80%'}}>
                <Button title="Back" onPress={handleBack} />
              </View>
            </View>
          ) : (
            <View />
          )}
          <Text numberOfLines={2} style={[styles.title, styleTitle]}>
            {title}
          </Text>
          <View style={{flex: 2}}></View>
        </View>
      </View>
      {isBorder ? <View style={styles.border} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    // marginTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 6,
  },
  inforContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 12,
  },
});
