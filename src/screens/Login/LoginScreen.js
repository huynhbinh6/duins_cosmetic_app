import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import FastImage from 'react-native-fast-image';
import ButtonCustom from '../../components/Button/CustomButton';
import Colors from '../../theme/Colors';
import translate from '../../utils/translate';
import styles from './styles';
import {Button} from 'react-native-elements';
import TextBottom from '../../components/Text/TextBottom';
import {ForgotPassword, Home, Register} from '../../utils/BaseValues';

const logo = require('../../assets/images/logo.jpeg');

const LoginScreen = ({navigation}) => {
  const [inputText, setInputText] = useState(null);

  const _handleChangeText = text => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <FastImage source={logo} style={styles.logo} />
      </View>
      <View style={styles.formLoginContainer}>
        <Text style={styles.staticText}>{translate.headerLogin}</Text>
        <View style={styles.subContainer}>
          <TextInput
            placeholder={translate.phoneNumber}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            value={inputText}
            maxLength={10}
            onChangeText={text => _handleChangeText(text)}
          />
          <TextInput
            placeholder={translate.password}
            placeholderTextColor={Colors.textDisable}
            style={styles.inputText}
            value={inputText}
            onChangeText={text => _handleChangeText(text)}
          />
          <Button
            titleStyle={styles.rightText}
            type="clear"
            title={translate.forgotPassword}
            onPress={() => navigation.navigate(ForgotPassword)}
          />
          <ButtonCustom
            _onPress={() => navigation.navigate(Home)}
            title={translate.login}
          />
        </View>
      </View>
      <TextBottom
        title={translate.notHaveAccount}
        actionTitle={translate.registerNow}
        openScreen={() => navigation.navigate(Register)}
      />
    </View>
  );
};

export default LoginScreen;
