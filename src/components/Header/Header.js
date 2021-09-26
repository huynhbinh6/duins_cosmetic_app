import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import translate from '../../utils/translate';
import Icon from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-elements';
import styles from './styles';
import space from '../../utils/spacing';

const userLogo = require('../../assets/images/logo.jpeg');

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <FastImage
        source={userLogo}
        resizeMode={'contain'}
        style={styles.logoStyle}
      />
      <Text style={styles.headerText}>{translate.headerTitle}</Text>
      <View>
        <Icon name="ios-cart-outline" size={space.hd45} />
        <Badge status="primary" value="10" containerStyle={styles.badgeIcon} />
      </View>
    </View>
  );
};

export default Header;
