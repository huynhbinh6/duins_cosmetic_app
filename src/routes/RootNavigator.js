import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack} from './AuthStack';
import {Auth, Main} from '../utils/BaseValues';
import {HomeStack} from './HomeStack';

const RootStack = createNativeStackNavigator();
const INITIAL_ROUTE = Auth;

export function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={INITIAL_ROUTE}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <RootStack.Screen name={Auth} component={AuthStack} />
      <RootStack.Screen name={Main} component={HomeStack} />
    </RootStack.Navigator>
  );
}
