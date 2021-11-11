import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../utils/BaseValues';
import HomeScreen from '../screens/Home/HomeScreen';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-elements';
import space from '../utils/spacing';
import translate from '../utils/translate';
import styles from './styles';

const MainStack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <MainStack.Navigator
      initialRouteName={Home}
      screenOptions={({navigation}) => ({
        // headerShown: false,
        headerRight: () => {
          return (
            <TouchableOpacity>
              <Icon name="ios-cart-outline" size={space.hd40} />
              <Badge
                status="primary"
                value="6"
                containerStyle={styles.badgeIcon}
              />
            </TouchableOpacity>
          );
        },
        headerTitle: () => {
          return <Text style={styles.titleStack}>{translate.headerTitle}</Text>;
        },
        headerShadowVisible: true,
      })}>
      <MainStack.Screen name={Home} component={HomeScreen} />
    </MainStack.Navigator>
  );
}
