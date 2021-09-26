import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPassword,
  Home,
  Login,
  OPTConfirm,
  Register,
  Splash,
} from '../utils/BaseValues';
import LoginScreen from '../screens/Login/LoginScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import OTPConfirmScreen from '../screens/Register/OTPConfirmScreen';
import ForgotPwScreen from '../screens/ForgotPassword/ForgotPwScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const Auth = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator
      initialRouteName={Splash}
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name={Splash} component={SplashScreen} />
      <Auth.Screen name={Login} component={LoginScreen} />
      <Auth.Screen name={Register} component={RegisterScreen} />
      <Auth.Screen name={OPTConfirm} component={OTPConfirmScreen} />
      <Auth.Screen name={ForgotPassword} component={ForgotPwScreen} />
      <Auth.Screen name={Home} component={HomeScreen} />
    </Auth.Navigator>
  );
}
