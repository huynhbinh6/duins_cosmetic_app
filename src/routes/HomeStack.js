import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../utils/BaseValues';
import HomeScreen from '../screens/Home/HomeScreen';

const MainStack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <MainStack.Navigator
      initialRouteName={Home}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={Home} component={HomeScreen} />
    </MainStack.Navigator>
  );
}
