import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

// Get device dimensions
const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const flashOpacity = useRef(new Animated.Value(1)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslateY = useRef(new Animated.Value(-150)).current;
  const formOpacity = useRef(new Animated.Value(0)).current;
  const formTranslateY = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(flashOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        Animated.parallel([
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(logoTranslateY, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(formOpacity, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(formTranslateY, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 2000);
  }, [flashOpacity, logoOpacity, logoTranslateY, formOpacity, formTranslateY]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e8ecf4" />
      <View style={styles.flashLogoContainer}>
        <Animated.View style={{opacity: flashOpacity}}>
          <Image
            source={require('../assets/ldtech.png')}
            style={styles.flashLogo}
          />
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.logo,
          {opacity: logoOpacity, transform: [{translateY: logoTranslateY}]},
        ]}>
        <View style={styles.logoBackground}>
          <Image
            source={require('../assets/ldtech.png')}
            style={styles.logoImage}
          />
        </View>
      </Animated.View>

      <Animated.View
        style={[
          styles.loginForm,
          {opacity: formOpacity, transform: [{translateY: formTranslateY}]},
        ]}>
        <LinearGradient colors={['#d63031', '#2d3436']} style={styles.gradient}>
          <View style={styles.circle}>
            <Image
              source={require('../assets/profiles.png')}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Employee ID</Text>
              <View style={styles.inputContainer}>
                <Icon
                  name="envelope"
                  size={20}
                  color="#6b7280"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="EmployeeID"
                  placeholderTextColor="#6b7280"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  style={styles.textInput}
                />
              </View>
            </View>
            <View style={styles.input1}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <Icon
                  name="lock"
                  size={20}
                  color="#6b7280"
                  style={styles.icon}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#6b7280"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry
                  style={styles.textInput}
                />
              </View>
            </View>
            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MainTabNavigator')}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign In</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf4',
  },
  flashLogo: {
    width: width * 0.6, // 60% of screen width
    height: height * 0.05, // 5% of screen height
  },
  flashLogoContainer: {
    flex: 1,
    position: 'absolute', // Ensure it's positioned independently
    top: 0, // Start from the top of the screen
    left: 0, // Start from the left of the screen
    right: 0, // Extend to the right edge of the screen
    bottom: 0, // Extend to the bottom of the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#e8ecf4', // Match your background color to make it blend in
  },
  logo: {
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
  },
  logoBackground: {
    padding: 20,
    borderRadius: 8,
    top:100
  },
  logoImage: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.05, // 5% of screen height
  },
  loginForm: {
    position: 'absolute',
    top: height * 0.44, // 40% from top of screen
    width: '100%',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  gradient: {
    width: '100%',
    height: height * 0.56, // 60% of screen height
    padding: 20,
    borderRadius: 35,
  },
  circle: {
    position: 'absolute',
    bottom: '98%',
    width: width * 0.3, // 30% of screen width
    height: width * 0.3, // keep it square
    borderRadius: (width * 0.3) / 2, // make it circular
    backgroundColor: '#ffffff',
    elevation: 20,
    zIndex: 1,
    alignSelf: 'center',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: (width * 0.3) / 2,
  },
  inputLabel: {
    fontSize: width * 0.045, // Responsive font size based on width
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    marginBottom: 16,
    paddingTop: 25,
  },
  input1: {
    marginBottom: 16,
  },
  formAction: {
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#1e272e',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.02, // 2% of screen height
    paddingHorizontal: width * 0.1, // 10% of screen width
    elevation: 4,
  },
  btnText: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: '600',
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    elevation: 9,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: width * 0.04, // Responsive text input size
    color: '#000',
  },
});
