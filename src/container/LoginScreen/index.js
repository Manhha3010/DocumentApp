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
import ButtonSmall from '../../components/ButtonSmall/ButtonSmall';
import OTPTextInput from 'react-native-otp-textinput';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../const/color';
import {signIn} from '../../components/Request/auth';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');
  const [passWordConfirm, setPasswordConfirm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNumber, setModalNumber] = useState(0);
  const [otp, setOtp] = useState(null);

  const navigation = useNavigation();

  // const clearText = () => {
  //   otpInput.current.clear();
  // };

  // const setText = () => {
  //   otpInput.current.setValue("1234");
  // };

  const checkValidatePassConfirm = () => {
    if (passWord !== passWordConfirm) {
      Alert.alert('Mật khẩu không khớp');
      setModalNumber(2);
    } else {
      setModalNumber(3);
    }
  };
  const checkValidateEmail = () => {
    if (email === '') {
      Alert.alert('Email is required');
      setModalNumber(0);
      return;
    } else setModalNumber(1);
  };

  function stepModal() {
    if (modalNumber === 0) {
      return (
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
                  <Text style={styles.modalText}>Quên mật khẩu </Text>
                </View>
                <View></View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/img/lock.png')}
                  style={{width: 247, height: 247, marginVertical: 24}}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{textAlign: 'center', width: '75%'}}>
                  Nhập email của bạn để lấy mã xác minh lấy lại mật khẩu.
                </Text>
                <TextInput
                  autoCorrect={false}
                  style={styles.textInputForgot}
                  onChangeText={text => setEmail(text)}
                  placeholder={'Nhập email'}
                />
                <TouchableOpacity onPress={checkValidateEmail}>
                  <ButtonSmall text={'Gửi OTP'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else if (modalNumber === 1) {
      return (
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
                  <Text style={styles.modalText}>Xác nhận</Text>
                </View>
                <View></View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/img/mail-forgot.png')}
                  style={{width: 247, height: 247, marginVertical: 24}}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{textAlign: 'center', width: '75%'}}>
                  Chúng tôi đã gửi đến
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    width: '75%',
                    fontWeight: 'bold',
                  }}>
                  {email}
                </Text>
                <Text style={{textAlign: 'center', width: '80%'}}>
                  một mã. Hãy kiểm tra email và nhập vào đây
                </Text>
                <OTPTextInput
                  handleTextChange={e => setOtp(e)}
                  textInputStyle={styles.otpCode}
                  tintColor="#A5CFFF"
                  offTintColor="#A5CFFF"
                />
                {console.log(otp)}
                {/* <OTPInputView
                  style={{ width: "80%", height: 200 }}
                  pinCount={4}
                  // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  // onCodeChanged = {code => { this.setState({code})}}
                  autoFocusOnLoad
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.underlineStyleHighLighted}
                  onCodeFilled={(code) => {
                    console.log(`Code is ${code}, you are good to go!`);
                  }}
                /> */}
                <TouchableOpacity>
                  <Text style={{color: colors.primary, marginBottom: 10}}>
                    Gửi lại mã
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalNumber(2)}>
                  <ButtonSmall text={'Xác nhận'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else if (modalNumber === 2) {
      return (
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
                  <Text style={styles.modalText}>Quên mật khẩu </Text>
                </View>
                <View></View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/img/key-forgot.png')}
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
                    textAlign: 'left',
                    width: '90%',
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Nhập mật khẩu mới:
                </Text>
                <TextInput
                  autoCorrect={false}
                  style={styles.textInputForgot}
                  onChangeText={text => setPassword(text)}
                  placeholder={'Nhập password'}
                />
                <Text
                  style={{
                    textAlign: 'left',
                    width: '90%',
                    fontSize: 14,
                    fontWeight: '600',
                  }}>
                  Nhập lại mật khẩu:
                </Text>
                <TextInput
                  autoCorrect={false}
                  style={styles.textInputForgot}
                  onChangeText={text => setPasswordConfirm(text)}
                  placeholder={'Nhập password'}
                />
                <TouchableOpacity onPress={checkValidatePassConfirm}>
                  <ButtonSmall text={'Tiếp tục'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else if (modalNumber === 3) {
      return (
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
                  <Text style={styles.modalText}>Hoàn thành</Text>
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
                  Đặt lại mật khẩu thành công. Giờ thì bạn có thể tiếp tục đăng
                  nhập.
                </Text>

                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <ButtonSmall text={'Hoàn Thành'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    }
  }

  const onPressSignIn = async () => {
    try {
      const res = await signIn(email, passWord);
      console.log('ress o man login', res);
      if (res) {
        navigation.replace('Tabs');
      }
    } catch (error) {
      Alert.alert(error.message);
      return;
    }
  };

  return (
    <LinearGradient
      colors={[colors.primary, '#fff']}
      start={{x: 0.26, y: 0.26}}
      end={{x: 0, y: 1.0}}
      location={[0.25, 0.4]}
      style={styles.root}>
      <ScrollView keyboardDismissMode={'on-drag'}>
        {stepModal()}
        <SafeAreaView>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View>
              <View style={styles.textHeaderContainer}>
                <Text style={styles.textHeader}>Đăng nhập tài khoản</Text>
                <Image
                  source={require('../../assets/img/vecto-login.png')}
                  style={styles.imgHeader}
                />
              </View>
              <Text style={styles.textHeader2}>
                Chào mừng bạn đến với Name !
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
              onChangeText={text => setEmail(text)}
              placeholder={'Nhập email'}
            />
            {/* {console.log("username", email)} */}
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={text => setPassword(text)}
              placeholder={'Nhập password'}
              passwordRules={true}
              secureTextEntry={true}
            />
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setModalNumber(0);
              }}>
              <Text style={styles.forgotPass}>Quên mật khẩu ?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPressSignIn}>
              <ButtonBig text={'Đăng nhập'} />
            </TouchableOpacity>
            <View style={{paddingVertical: 20}}>
              <TouchableOpacity>
                <Text style={styles.fingerText}>Đăng nhập bằng vân tay</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signUpText}>{`  Đăng ký`}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

export default LoginScreen;
