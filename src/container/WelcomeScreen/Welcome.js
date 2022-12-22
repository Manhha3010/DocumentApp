import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import ButtonBig from '../../components/ButtonBig/ButtonBig';
import AsyncStorage from '@react-native-async-storage/async-storage';
function WelCome() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#0085FF', '#fff']}
      start={{x: 0.26, y: 0.26}}
      end={{x: 0, y: 1.0}}
      location={[0.25, 0.4]}
      style={styles.root}>
      <View>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/img/image4.png')}
            style={styles.imgStyle}></Image>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.appName}>Về app Name</Text>
          <Text style={styles.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            maecenas quis interdum enim enim molestie faucibus. Pretium non non
            massa eros, nunc, urna. Ac laoreet sagittis donec vel. Amet, duis
            justo, quam quisque egestas. Quam enim at dictum condimentum.
            Suspendisse.
          </Text>
          <TouchableOpacity
            onPress={async () => {
              const token = await AsyncStorage.getItem('token');
              console.log('token ??', token);
              navigation.navigate('LoginScreen');
            }}>
            <ButtonBig text={'Bắt đầu'} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default WelCome;
