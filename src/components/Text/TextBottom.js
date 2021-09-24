import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';

const TextBottom = ({title, actionTitle, openScreen}) => {
  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomText}>{title}</Text>
      <Button
        onPress={openScreen}
        titleStyle={styles.richText}
        type="clear"
        title={actionTitle}
      />
    </View>
  );
};

export default TextBottom;
