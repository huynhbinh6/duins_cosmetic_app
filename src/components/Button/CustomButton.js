import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ButtonCustom = ({title, _onPress}) => {
  return (
    <TouchableOpacity style={styles.customBtn} onPress={_onPress}>
      <Text style={styles.textBtn}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
