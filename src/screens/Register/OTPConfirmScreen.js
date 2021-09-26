import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Colors from '../../theme/Colors';
import translate from '../../utils/translate';
import styles from './styles';
import ButtonCustom from '../../components/Button/CustomButton';
import TextBottom from '../../components/Text/TextBottom';

const logo = require('../../assets/images/logo.jpeg');

const OTPConfirmScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoOTPConfirm}>
        <FastImage source={logo} style={styles.logo} />
      </View>
      <View style={styles.formRegisterContainer}>
        <Text style={styles.staticText}>{translate.confirmOTP}</Text>
        <Text style={styles.msgOTP}>{translate.OTPMsg}</Text>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={translate.inputOTP}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            //   value={inputText}
            //   onChangeText={text => _handleChangeText(text)}
          />
          <Button
            titleStyle={styles.rightText}
            type="clear"
            title={translate.resendOTP}
          />
          <ButtonCustom title={translate.confirmRegister} />
        </View>
      </View>
      <TextBottom title={translate.haveAccount} actionTitle={translate.login} />
    </View>
  );
};

export default OTPConfirmScreen;
