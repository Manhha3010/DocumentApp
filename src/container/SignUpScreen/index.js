import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useRef, useState} from 'react';
import ButtonBig from '../../components/ButtonBig/ButtonBig';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ButtonSmall from '../../components/ButtonSmall/ButtonSmall';
import {createUser} from '../../components/Request/auth';
function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');
  const [passWordConfirm, setPasswordConfirm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('first');

  const toggleRadioButton = () => {
    setChecked(checked === 'first' ? 'second' : 'first');
  };
  const navigation = useNavigation();

  // const clearText = () => {
  //   otpInput.current.clear();
  // };

  // const setText = () => {
  //   otpInput.current.setValue("1234");
  // };
  const onPressSignUp = async () => {
    try {
      await createUser(email, passWord);
    } catch (error) {
      Alert.alert(error.message);
      return;
    }

    setModalVisible(true);
  };
  return (
    <LinearGradient
      colors={['#0085FF', '#fff']}
      start={{x: 0.26, y: 0.26}}
      end={{x: 0, y: 1.0}}
      location={[0.25, 0.4]}
      style={styles.root}>
      <ScrollView keyboardDismissMode={'on-drag'}>
        <SafeAreaView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={[styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      source={require('../../assets/img/back-outline.png')}
                      style={{width: 24, height: 24}}
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.modalText}>Ho??n th??nh</Text>
                  </View>
                  <View></View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/img/ok.gif')}
                    style={{width: 247, height: 247, marginVertical: 24}}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      width: '90%',
                      fontSize: 14,
                      fontWeight: '600',
                      marginBottom: 30,
                    }}>
                    B???n ???? ????ng k?? th??nh c??ng.
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      navigation.pop();
                    }}>
                    <ButtonSmall text={'Ho??n Th??nh'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View>
              <View style={styles.textHeaderContainer}>
                <Text style={styles.textHeader}>????ng nh???p t??i kho???n</Text>
                <Image
                  source={require('../../assets/img/vecto-login.png')}
                  style={styles.imgHeader}
                />
              </View>
              <Text style={styles.textHeader2}>
                Ch??o m???ng b???n ?????n v???i Name !
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/img/logo-login-screen.png')}
                style={styles.logo}
              />
              <Text style={styles.appName}>DUY MANH</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.textInputContainer}>
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={text => setName(text)}
              placeholder={'T??n'}
            />
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={text => setEmail(text)}
              placeholder={'Nh???p email'}
            />
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={text => setPassword(text)}
              placeholder={'Nh???p Password'}
              secureTextEntry={true}
            />
            {/* {console.log("username", email)} */}
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={text => setPasswordConfirm(text)}
              placeholder={'Nh???p l???i password'}
              secureTextEntry={true}
            />
            <View style={{flexDirection: 'row'}}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => toggleRadioButton()}
                color={'red'}
                uncheckedColor={'#fff'}
              />
              <Text style={styles.forgotPass}>
                T??i ?????ng ?? v???i c??c ??i???u kho???n & ch??nh s??ch c???a Duy Manh
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPressSignUp}>
              <ButtonBig text={'????ng k??'} />
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginTop: 12}}>
              <Text>B???n ???? c?? t??i kho???n?</Text>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Text style={styles.signUpText}>{`  ????ng nh???p`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

export default SignUpScreen;
