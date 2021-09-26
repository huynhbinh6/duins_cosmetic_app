import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonCustom from '../../components/Button/CustomButton';
import TextBottom from '../../components/Text/TextBottom';
import Colors from '../../theme/Colors';
import {OPTConfirm} from '../../utils/BaseValues';
import translate from '../../utils/translate';
import styles from './styles';

const logo = require('../../assets/images/logo.jpeg');

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <FastImage source={logo} style={styles.logo} />
      </View>
      <View style={styles.formRegisterContainer}>
        <Text style={styles.staticText}>{translate.welcomeNewbie}</Text>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={translate.fullName}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            //   value={inputText}
            //   onChangeText={text => _handleChangeText(text)}
          />
          <TextInput
            placeholder={translate.phoneNumber}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            //   value={inputText}
            //   onChangeText={text => _handleChangeText(text)}
          />
          <TextInput
            placeholder={translate.password}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            //   value={inputText}
            //   onChangeText={text => _handleChangeText(text)}
          />
          <TextInput
            placeholder={translate.confirmPassword}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            //   value={inputText}
            //   onChangeText={text => _handleChangeText(text)}
          />
          <ButtonCustom
            title={translate.register}
            _onPress={() => navigation.navigate(OPTConfirm)}
          />
        </View>
      </View>
      <TextBottom title={translate.haveAccount} actionTitle={translate.login} />
    </View>
  );
};

export default RegisterScreen;
