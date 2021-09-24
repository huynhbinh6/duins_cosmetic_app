import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Login} from '../../utils/BaseValues';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Login);
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/images/logo.jpeg')}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;
