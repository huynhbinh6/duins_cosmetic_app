import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import translate from '../../utils/translate';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Header from '../../components/Header/Header';

const userLogo = require('../../assets/images/logo.jpeg');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Header
        centerComponent={{
          text: translate.headerTitle,
          style: styles.headerText,
        }}
        rightComponent={
          <View>
            <Icon name="ios-cart-outline" size={35} />
            <Badge
              status="primary"
              value="3"
              containerStyle={{position: 'absolute', top: -3, right: -4}}
            />
          </View>
        }
        leftComponent={
          <FastImage
            source={userLogo}
            style={{width: 35, height: 35, borderRadius: 35 / 2}}
          />
        }
      /> */}
    </View>
  );
};

export default HomeScreen;
