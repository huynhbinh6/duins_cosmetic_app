import React from 'react';
import {View, Text, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import Colors from '../../theme/Colors';
import translate from '../../utils/translate';
import styles from './styles';
import ButtonCustom from '../../components/Button/CustomButton';
import TextBottom from '../../components/Text/TextBottom';
import {Login} from '../../utils/BaseValues';

const logo = require('../../assets/images/logo.jpeg');

const ForgotPwScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoOTPConfirm}>
        <FastImage source={logo} style={styles.logo} />
      </View>
      <View style={styles.formRegisterContainer}>
        <Text style={styles.staticText}>{translate.forgotPassword}</Text>
        <Text style={styles.msgOTP}>{translate.inputFormForgotPw}</Text>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={translate.phoneNumber}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            //   value={inputText}
            //   onChangeText={text => _handleChangeText(text)}
          />
          <ButtonCustom title={translate.resetPw} />
        </View>
      </View>
      <TextBottom
        title={translate.rememberPw}
        actionTitle={translate.login}
        openScreen={() => navigation.goBack()}
      />
    </View>
  );
};

export default ForgotPwScreen;
