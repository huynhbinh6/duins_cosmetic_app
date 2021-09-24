import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Splash} from '../utils/BaseValues';
import LoginScreen from '../screens/Login/LoginScreen';
import SplashScreen from '../screens/Splash/SplashScreen';

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
    </Auth.Navigator>
  );
}
